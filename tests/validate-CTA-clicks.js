Feature('Validate CTA buttons works');

// open portfolio page
Scenario('Open the portfolio page',  ({ I }) => {
    I.amOnPage('/');
    I.seeInTitle('Fulya Ertays Portfolio');

});

