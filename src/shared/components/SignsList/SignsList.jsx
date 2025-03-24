import SignItem from '@shared/components/SignItem/SignItem';

const SignsList = ({ signs }) => {
  return (
    <div>
      {signs.map(sign => (
        <SignItem key={sign.id} sign={sign} />
      ))}
    </div>
  );
};

export default SignsList;
