import { RedesNeuronalesWebPage } from './app.po';

describe('redes-neuronales-web App', () => {
  let page: RedesNeuronalesWebPage;

  beforeEach(() => {
    page = new RedesNeuronalesWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
