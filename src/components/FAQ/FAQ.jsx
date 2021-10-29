import { useNav } from '../../hooks';

import Question from './Question';

const FAQ = () => {
  const navRef = useNav('faq');
  // TODO: Fetch FAQs
  const questions = [
    {
      question: 'How do I register for the conference?',
      answer:
        'Morbi tempus libero sapien. Cras varius erat a euismod dictum. Maecenas mattis justo augue, lacinia placerat lacus elementum vel. Cras eu tristique neque. Morbi egestas eget erat sed porta. Vivamus sollicitudin massa vitae nulla lobortis sodales sit amet a risus.'
    },
    {
      question: 'Can I walk in and sign up for the conference?',
      answer:
        'Morbi tempus libero sapien. Cras varius erat a euismod dictum. Maecenas mattis justo augue, lacinia placerat lacus elementum vel. Cras eu tristique neque. Morbi egestas eget erat sed porta. Vivamus sollicitudin massa vitae nulla lobortis sodales sit amet a risus.'
    },
    {
      question: 'What discounts are available?',
      answer:
        'Morbi tempus libero sapien. Cras varius erat a euismod dictum. Maecenas mattis justo augue, lacinia placerat lacus elementum vel. Cras eu tristique neque. Morbi egestas eget erat sed porta. Vivamus sollicitudin massa vitae nulla lobortis sodales sit amet a risus.'
    },
    {
      question: 'Which payment methods do you accept?',
      answer:
        'Morbi tempus libero sapien. Cras varius erat a euismod dictum. Maecenas mattis justo augue, lacinia placerat lacus elementum vel. Cras eu tristique neque. Morbi egestas eget erat sed porta. Vivamus sollicitudin massa vitae nulla lobortis sodales sit amet a risus.'
    },
    {
      question: 'What types of sessions are covered and why should I attend?',
      answer:
        'Morbi tempus libero sapien. Cras varius erat a euismod dictum. Maecenas mattis justo augue, lacinia placerat lacus elementum vel. Cras eu tristique neque. Morbi egestas eget erat sed porta. Vivamus sollicitudin massa vitae nulla lobortis sodales sit amet a risus.'
    },
    {
      question: 'How do I register to attend a specific session or workshop?',
      answer:
        'Morbi tempus libero sapien. Cras varius erat a euismod dictum. Maecenas mattis justo augue, lacinia placerat lacus elementum vel. Cras eu tristique neque. Morbi egestas eget erat sed porta. Vivamus sollicitudin massa vitae nulla lobortis sodales sit amet a risus.'
    },
    {
      question: 'What is the Event Code of Conduct?',
      answer:
        'Morbi tempus libero sapien. Cras varius erat a euismod dictum. Maecenas mattis justo augue, lacinia placerat lacus elementum vel. Cras eu tristique neque. Morbi egestas eget erat sed porta. Vivamus sollicitudin massa vitae nulla lobortis sodales sit amet a risus.'
    },
    {
      question: 'How do I report a violation of the Code of Conduct?',
      answer:
        'Morbi tempus libero sapien. Cras varius erat a euismod dictum. Maecenas mattis justo augue, lacinia placerat lacus elementum vel. Cras eu tristique neque. Morbi egestas eget erat sed porta. Vivamus sollicitudin massa vitae nulla lobortis sodales sit amet a risus.'
    }
  ];
  const half = Math.ceil(questions.length / 2);
  const firstHalf = questions.slice(0, half);
  const secondHalf = questions.slice(half, questions.length);

  return (
    <section ref={navRef} id="faq" className="faq-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Ask Question?
              </h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Frequently asked questions and answers about the event
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div className="accordion">
              {firstHalf.map((question, index) => (
                <Question key={index} index={index + 1} {...question} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div className="accordion">
              {secondHalf.map((question, index) => (
                <Question key={index} index={index + 1} {...question} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
