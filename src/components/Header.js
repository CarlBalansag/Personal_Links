import '../Main.css';
import profile from "../img/noProfile.png"

function Head(props) {
  return (
    <div className="w-fit container mx-auto">
      <img src={profile} alt="" className='rounded-full mt-16'/>
      <h1 className='font-mono text-center mt-5'>{props.name}</h1>
      <h3 className='font-mono text-center mt-5'>{props.description}</h3>
    </div>
  );
}

export default Head;
