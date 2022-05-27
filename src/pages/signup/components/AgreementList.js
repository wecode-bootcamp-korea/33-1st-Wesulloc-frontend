import { useState } from 'react';
import AgreementItem from './AgreementItem';

const AgreementList = () => {
  const [itemList, setItemList] = useState(TERMS_LIST);

  return itemList.map(obj => {
    return <AgreementItem key={obj.id} item={obj} onCheck />;
  });
};

const TERMS_LIST = [
  {
    id: 1,
    text: '위설록 서비스 이용 약관',
    isRequired: true,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 2,
    text: '위설록 사이트 이용동의',
    isRequired: true,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 3,
    text: '위설록 문자 수신 동의',
    isRequired: false,
    hasMoreInfo: false,
    isChecked: false,
  },
  {
    id: 4,
    text: '개인정보 제 3자 제공동의(위설록)',
    isRequired: true,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 5,
    text: '개인정보 수집 및 이용 동의',
    isRequired: true,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 6,
    text: '개인정보 수집 및 이용 동의(마케팅)(위설록)',
    isRequired: false,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 7,
    text: '개인정보 제공동의(위설록)',
    isRequired: false,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 8,
    text: '개인정보 국외이전 동의(위설록)',
    isRequired: false,
    hasMoreInfo: true,
    isChecked: false,
  },
  {
    id: 9,
    text: '만 14세 이상입니다.',
    isRequired: true,
    hasMoreInfo: false,
    isChecked: false,
  },
];

export default AgreementList;
