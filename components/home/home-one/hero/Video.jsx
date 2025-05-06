import ModalVideo from "react-modal-video";

const Video = ({ isOpen, onClose }) => {
  return (
    <ModalVideo
      channel="youtube"
      youtube={{ autplay: 1 }}
      isOpen={isOpen}
      videoId="i3iDAU4E-Ag"
      onClose={onClose}
    />
  );
};

export default Video;
