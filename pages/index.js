import Head from 'next/head';
import fetch from "isomorphic-unfetch";
import Header from '../components/Header';
import Container from '../components/Container';
import { CheckIcon } from '../constant/Icons';
import { Api } from '../constant/Api';

const Home = ({posts}) => {
  console.log(posts)
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="./custom.css" />
      </Head>
      <Header />
      <div className="info_company">
        <Container>
          <div className="blogs">
            <header className="header_blogs">
              <div className="title_blog">We are <b>Puuwto</b></div>
              <p>We develop Mobile, Web and desktop applications, and it's free. We use only react, electronjs as frond-end. We use php, nodeJs and pyhton in back-end.</p>
            </header>
          </div>
        </Container>
      </div>
      <Container>
        <div className="blogs">
          <div className="header_blogs">
            <div className="title_blog_lates">Son Yazılar</div>
          </div>
          <div className="Blog_title">
            <div className="blog_aciklama">
              5 ways to check if an array contains a value in JavaScript
            </div>
            <div className="blog_date">20 Mayıs</div>
          </div>
          <div className="Blog_title">
            <div className="blog_aciklama">
              5 ways to check if an array contains a value in JavaScript
            </div>
            <div className="blog_date">20 Mayıs</div>
          </div>
          <div className="Blog_title">
            <div className="blog_aciklama">
            How to deep clone an array in JavaScript
            </div>
            <div className="blog_date">20 Mayıs</div>
          </div>
          <div className="Blog_title">
            <div className="blog_aciklama">
            I help startups & companies to develop and launch beautiful digital products in MEAN Stack and Spring Boot. In my free time, I write about modern JavaScript, Node.js, Spring Boot, and all things web development.
            </div>
            <div className="blog_date">20 Mayıs</div>
          </div>
        </div>
        <div className="blogs">
          <div className="header_blogs">
            <div className="title_blog_lates">Work With Me</div>
          </div>
          <p className="info_wwm">With over 8 years of experience developing web apps & REST APIs in Spring Boot & MEAN Stack, I can help you develop and launch your awesome product.</p>
        </div>
        <div className="blogs">
          <div className="header_blogs">
            <div className="title_blog_lates">What can I do for you?</div>
          </div>
          <ul className="list_of_work">
            <li className="low_li">
              <div className="check_area">
                <CheckIcon size={15} color="#fff" />
              </div>
              SaaS app in MEAN stack
            </li>
            <li className="low_li">
              <div className="check_area">
                <CheckIcon size={15} color="#fff" />
              </div>
              Website in Spring Boot & Thymeleaf
            </li>
            <li className="low_li">
              <div className="check_area">
                <CheckIcon size={15} color="#fff" />
              </div>
              Static website in Jekyll
            </li>
            <li className="low_li">
              <div className="check_area">
                <CheckIcon size={15} color="#fff" />
              </div>
              SaaS app in MEAN stack
            </li>
            <li className="low_li">
              <div className="check_area">
                <CheckIcon size={15} color="#fff" />
              </div>
              Website in Spring Boot & Thymeleaf
            </li>
            <li className="low_li">
              <div className="check_area">
                <CheckIcon size={15} color="#fff" />
              </div>
              Static website in Jekyll
            </li>
            <li className="low_li">
              <div className="check_area">
                <CheckIcon size={15} color="#fff" />
              </div>
              SaaS app in MEAN stack
            </li>
            <li className="low_li">
              <div className="check_area">
                <CheckIcon size={15} color="#fff" />
              </div>
              Website in Spring Boot & Thymeleaf
            </li>
            <li className="low_li">
              <div className="check_area">
                <CheckIcon size={15} color="#fff" />
              </div>
              Static website in Jekyll
            </li>
          </ul>
        </div>
      </Container>


      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
    </div>
  )
}


Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(Api + '/posts');
  const json = await res.json();
  return json;
};

export default Home;