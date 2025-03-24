import { RuleItem } from '@shared/components/RuleItem';

export const RulesList = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <RuleItem key={index} item={item} />
      ))}
    </div>
  );
};

export default RulesList;
