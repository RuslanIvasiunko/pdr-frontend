import SignItem from '@/shared/components/SignItem/SignItem';

const AllSignsList = ({ allSigns }) => {
  return (
    <div>
      {allSigns.map((subSection, index) => (
        <div key={index}>
          <h2>{subSection.title}</h2>
          {Array.isArray(subSection.signs) && subSection.signs.length > 0 ? (
            subSection.signs.map((sign, index) => (
              <SignItem key={index} sign={sign} />
            ))
          ) : (
            <p>Немає знаків для відображення.</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllSignsList;
