
const Card = ({ title, image, donation_target, donation_percentage, donation_received, days_remaining}) => {
  const displayPercentage = (value) => {
    let percentValue = Math.ceil(value * 100)
    if (percentValue >= 100){
      percentValue = 100
    }
    return percentValue
  }

  const formatRupiah = (rupiah) => {
    let init = rupiah.toString().split('').reverse().join('')
    let reverse = init.match(/\d{1,3}/g)
    let num = reverse.join('.').split('').reverse().join('')
    return num
  }
  return (
    <div className='card lg:w-[calc((100%-2rem)/3)] sm:w-[calc((100%-2rem)/2)] xs:w-full rounded-lg shadow-lg flex flex-col'>
      <div className="img-wrapper">
        <img src={image} className='img-wrapper rounded-t-lg'/>
      </div>
      <div className='p-3 box-border flex flex-col justify-between content-card rounded-b-lg'>
        <h1 className='text-lg font-medium xs:max-xl:text-base text-main-black'>{title}</h1>

        <div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 my-2">
            <div className={`${displayPercentage(donation_percentage) >= 100 ? 'bg-pink-300': 'bg-slate-400'} h-2.5 rounded-full`} style={{width:`${displayPercentage(donation_percentage)}%`}}></div>
          </div>
          <div className='progress-bar'>
            <div className={`actual-progress ${displayPercentage(donation_percentage) >= 100 ? 'receive': 'bellow'}`} style={{width:`${displayPercentage(donation_percentage)}%`}} />
          </div>
          <div className='flex flex-row justify-between'>
            <div className="text-amount">
              <div className="font-sm mb-1 text-main-black xs:max-sm:text-xs">Terkumpul</div>
              <div className="font-medium text-secondary-black xs:max-sm:text-sm">{`Rp ${formatRupiah(donation_received)}`} / <span className="text-xs">{`Rp ${formatRupiah(donation_target)}`}</span></div>
            </div>
            <div className="text-right">
              <div className="text-sm mb-1 text-sm xs:max-sm:text-xs">Sisa hari</div>
              <div className="font-medium text-secondary-black xs:max-sm:text-sm">{days_remaining}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card