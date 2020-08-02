export default function ReadPage({ page }) {
  console.log(page);
  return <div></div>;
}

ReadPage.getInitialProps = ({ query }) => {
  return query;
};
