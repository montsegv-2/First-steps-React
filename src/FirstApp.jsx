import PropTypes from 'prop-types';


export const FirstApp = ({title, subTitle, name}) => {


  return (
    <>
      <h1>{ title }</h1>
        {/* <h1>{ JSON.stringify( newMessage ) }</h1> */}
        <p>{subTitle}</p>
        <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
};

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Montserrrrrrat',
}