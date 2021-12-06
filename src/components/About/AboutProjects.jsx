const AboutProjects = ({title, area, year, description}) => {
  return (
    <div className='pb-4'>
      <h4 className='text-primary-white pb-4'>{title}</h4>
      <p className='text-primary-grey pb-4 body_1_bold'>{area} - {year}</p>
      <p className='text-primary-white body_1_regular'>{description}</p>
    </div>
  )
}

export default AboutProjects
