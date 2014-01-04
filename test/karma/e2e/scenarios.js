'use strict';

describe('demo', function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  describe('companies', function() {

    beforeEach(function() {
      browser().navigateTo('#/companies');
    });


    it('should render companies when user navigates to /companies', function() {
      expect(element('[ng-view] h4:first').text()).
        toMatch(/Companies/);
    });

  });


  describe('projects', function() {

    beforeEach(function() {
      browser().navigateTo('#/projects');
    });


    it('should render projects  when user navigates to /projects', function() {
      expect(element('[ng-view] h4:first').text()).
        toMatch(/Projects/);
    });

  });
});
