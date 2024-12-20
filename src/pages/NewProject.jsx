import React from 'react';
import HeaderBanner from '../components/HeaderBanner';
import { Container, Row } from 'react-bootstrap';
import FormNewProject from '../components/FormNewProject';

const NewProject = () => {
  return (
    <div>
      <HeaderBanner
        title="Submit New Project Here"
        description="Trackpi is your business's growth partner, turning insights into action. With tailored strategies and expert guidance, we help you navigate challenges, streamline operations, and unlock new opportunities for success."
        classname="bgOne"
        noButton={true}
      />
      <section className=" w-full px-6 lg:px-20 xl:px-24 2xl:px-32 py-8 mx-auto my-8">
     
        <Container className="flex flex-col items-center">
          <div className="w-full md:w-3/4 bg-white py-3 px-20 rounded ">
            <FormNewProject />
          </div>
        </Container>
      </section>{' '}
    </div>
  );
};

export default NewProject;
