import logo from './../assets/parking-location.svg';

const Logo = () => {
    return (
        <div className='flex items-center gap-2 m-2'>
            <img src={logo} alt='logo' className='max-w-[50px]' />
            <h2 className='text-black font-bold text-3xl'>Parking PRO</h2>
        </div>
    )
}

export default Logo