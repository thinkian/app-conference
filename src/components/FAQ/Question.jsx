import { useAccordion } from '../../hooks';

const Question = props => {
  const { answer, index, question } = props;
  const [expanded, parentRef, handleClick] = useAccordion();
  const showClass = expanded ? 'show' : '';

  return (
    <div className="card" ref={parentRef}>
      <div className="card-header" id={`question-title-${index}`}>
        <button
          className="accordion-btn btn btn-link btn-block text-left"
          aria-expanded={expanded ? 'true' : 'false'}
          aria-controls={`question-${index}`}
          type="button"
          onClick={handleClick}
        >
          <i className="lni-chevron-right"></i> {question}
        </button>
      </div>
      <div
        id={`question-${index}`}
        className={`collapse ${showClass}`}
        aria-labelledby={`question-title-${index}`}
      >
        <div className="card-body">{answer}</div>
      </div>
    </div>
  );
};

export default Question;
