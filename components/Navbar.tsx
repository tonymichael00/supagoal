import AuthProviders from './AuthProviders';

const Navbar = () => {
  const session = {};

  return (
    <div className="text-center grid grid-cols-3">
      <div></div>
      <div>
        supa<span className="text-secondary">goal</span>
      </div>
      <div className="text-xl text-white text-right">
        {session ? <>Username</> : <AuthProviders />}
      </div>
    </div>
  );
};

export default Navbar;
