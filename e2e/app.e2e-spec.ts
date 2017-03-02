import { MemberListPage } from './app.po';

describe('member-list App', function() {
  let page: MemberListPage;

  beforeEach(() => {
    page = new MemberListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
