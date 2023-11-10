const Statistics = () => {
  return (
    <div className="statistics">
      <div className="container">
        <h3 className="statistics__heading">Advanced Statistics</h3>
        <p className="statistics__description">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className="statistics__features">
          <div className="statistics__feature" data-image="recognition">
            <div className="statistics__feature-image"></div>
            <h5 className="statistics__feature-title">Brand Recognition</h5>
            <p className="statistics__feature-description">
              Boost your brand recognition with each click. Generic link
              don&apos;t mean a thing. Branded links help instill confidence in
              your content.
            </p>
          </div>
          <div className="statistics__feature-divider" data-divider="1"></div>
          <div className="statistics__feature" data-image="records">
            <div className="statistics__feature-image"></div>
            <h5 className="statistics__feature-title">Detailed Records</h5>
            <p className="statistics__feature-description">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="statistics__feature-divider" data-divider="2"></div>
          <div className="statistics__feature" data-image="customizable">
            <div className="statistics__feature-image"></div>
            <h5 className="statistics__feature-title">Fully Customizable</h5>
            <p className="statistics__feature-description">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
