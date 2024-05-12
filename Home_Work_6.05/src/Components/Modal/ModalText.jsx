function ModalText(props) {
  const { idValue, nameValue, emailValue, telefinValue } = props;

  return (
    <div>
      <p>id: {idValue}</p>
      <p>Name : {nameValue}</p>
      <p>Email: {emailValue}</p>
      <p>Telefon: {telefinValue}</p>
    </div>
  );
}

export default ModalText;
