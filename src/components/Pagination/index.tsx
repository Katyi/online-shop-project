import {PageWrapper, Image1, PageFrame, Text1} from "./pagination.style.js";
import inputimg1 from '../../assets/pagination/vector8.png';
import inputimg2 from '../../assets/pagination/vector9.png';

interface Props {
  page:number;
  changePage: (p:number) => void;
  totalPages:number;
}

const getPagesArray = (totalPages:number) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1)
  }
  return result;
}

const Pagination = (props: Props) => {
  let pagesArray = getPagesArray(props.totalPages);
  return (
    <PageWrapper>
      <Image1 src={inputimg1} style={{marginRight:"35px"}}/>
        {pagesArray.map(p =>
          <PageFrame 
            onClick={() => props.changePage(p)} 
            key={p}
            style = {props.page !== p ? {background:"transparent"}: {background:""}}
          >
            <Text1  >
              {p}
            </Text1>
          </PageFrame>
        )}
      <Image1 src={inputimg2} style={{marginLeft:"35px"}}/>
    </PageWrapper>
  );
};

export default Pagination;
