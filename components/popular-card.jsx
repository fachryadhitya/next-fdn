import { CgProfile } from 'react-icons/cg';
import { BsList } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

function PopularCard() {
  return (
    <div className="w-full lg:w-1/3 shadow-xl border-2 rounded flex flex-col items-center gap-4 p-4 mb-4">
      <img
        src="https://image.femaledaily.com/dyn/100/fdn-talk/groups/image/fd_comm_Icon_gamers.png"
        alt="actress pict"
        className="object-cover w-40 h-auto max-w-full w-100"
      />

      <h3 className="title-font font-bold text-lg">Embrace the gurl</h3>
      <div className="inline-flex text-xl gap-4">
        <CgProfile />
        <BsList />
        <BiMessageDetail />
      </div>
      <p>May the forth be with you! </p>
    </div>
  );
}

export default PopularCard;
