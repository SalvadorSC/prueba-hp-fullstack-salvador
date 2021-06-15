exports.inviteUser = function (req, res) {
  var invitationBody = req.body;
  var shopId = req.params.shopId;
  var authUrl = "https://url.to.auth.system.com/invitation";

  superagent
    .post(authUrl)
    .send(invitationBody)
    .then((err, invitationResponse) => {
      try {
        if (invitationResponse.status === 201) {
          User.findOneAndUpdate(
            {
              authId: invitationResponse.body.authId,
              email: invitationBody.email,
            },
            {
              upsert: true,
              new: true,
            },
            (err, createdUser) => {
              let invitationId = invitationResponse.body.invitationId;
              Shop.findById(shopId).exec((err, shop) => {
                const { invitations, users } = shop;
                if (err || !shop) {
                  return res
                    .status(500)
                    .send(err || { message: "No shop found" });
                }
                if (invitations.indexOf(invitationId)) {
                  invitations.push(invitationId);
                }
                if (users.indexOf(createdUser._id) === -1) {
                  users.push(createdUser);
                }
                shop.save();
              });
            }
          );
        }
      } catch (err) {
        if (invitationResponse.status === 200) {
          res.status(400).json({
            error: true,
            message: "User already invited to this shop",
          });
          return;
        } else {
          return res.status(404).send(err);
        }
      }
      res.json(invitationResponse);
    });
};
