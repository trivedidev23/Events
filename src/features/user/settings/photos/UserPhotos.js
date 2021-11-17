import React from "react";
import { Fragment } from "react";
import { Button, Card, Header, Image } from "semantic-ui-react";

const UserPhotos = ({ profile, photos, deletePhoto, selectMainPhoto }) => {
  let filteredPhotos;
  if (photos) {
    filteredPhotos = photos.filter((photo) => {
      return photo.url !== profile.photoURL;
    });
  }

  return (
    <Fragment>
      <Header sub color="teal" content="All Photos" />

      <Card.Group itemsPerRow={5}>
        <Card>
          <Image src={profile.photoURL || "/images/user.png"} />
          <Button positive>Main Photo</Button>
        </Card>
        {photos &&
          filteredPhotos.map((photo) => (
            <Card key={photo.id}>
              <Image src={photo.url} />
              <div className="ui two buttons">
                <Button
                  onClick={() => selectMainPhoto(photo)}
                  basic
                  color="green"
                >
                  Main
                </Button>
                <Button
                  basic
                  icon="trash"
                  color="red"
                  onClick={() => deletePhoto(photo)}
                />
              </div>
            </Card>
          ))}
      </Card.Group>
    </Fragment>
  );
};

export default UserPhotos;
