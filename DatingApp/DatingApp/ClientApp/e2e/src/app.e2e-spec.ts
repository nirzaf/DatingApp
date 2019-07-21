




import { AppPage } from './app.po';

describe('DatingApp App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display application title: DatingApp', () => {
        page.navigateTo();
        expect(page.getAppTitle()).toEqual('DatingApp');
    });
});
