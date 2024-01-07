import PropTypes from 'prop-types';
import CloseButton from './CloseButton';
import Player from './YoutubePlayer';

function BlackLayer() {
  return (
    <div
      className="fixed top-0 left-0
                    overflow-hidden
                    w-full h-full
                    bg-[#0b0b0b] opacity-80
                    z-[1000]
                    "
    />
  );
}

export default function VideoPopUp({ switchHandler, embedSrc }) {
  const stopVideo = () => {
    switchHandler({ link: '', status: false });
  };

  return (
    <>
      <BlackLayer />
      <div
        className="wrapper absolute top-0 right-0
                      w-full h-full
                      z-[10003]
                      outline-none
                      flex items-center justify-center
                      px-4
                     "
      >
        <div className="w-[900px]">
          <CloseButton e={stopVideo} />
          <Player link={embedSrc} />
        </div>
      </div>
    </>
  );
}

VideoPopUp.propTypes = {
  switchHandler: PropTypes.func.isRequired,
  embedSrc: PropTypes.string.isRequired,
};
