export const objectToArray = (object) => {
  if (object) {
    return Object.entries(object).map((e) =>
      Object.assign({}, e[1], { id: e[0] })
    );
  }
};

export const createNewEvent = (user, photoURL, event) => {
  return {
    ...event,
    hostUid: user.uid,
    hostedBy: user.displayName,
    hostPhotoURL: photoURL || "/images/user.png",
    created: new Date(),
    attendees: {
      [user.uid]: {
        going: true,
        joinDate: new Date(),
        photoURL: photoURL || "/images/user.png",
        displayName: user.displayName,
        host: true,
      },
    },
  };
};
