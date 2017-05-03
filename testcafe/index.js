import { Selector } from 'testcafe';

fixture `dxList page`
    // add your URL here
    .page `http://localhost:3000/`;

test('Check if detail data is loaded', async t => {
    const firstItem = Selector('.dx-list').find('span').withText('Leanne Graham:');
    const firstAlbum = Selector('.dx-row').find('td').withText('quidem molestiae enim');
    const firstPhoto = Selector('.dx-row').find('td').withText('accusamus beatae ad facilis cum similique qui sunt');

    await t
        .click(firstItem) 
        .expect(firstAlbum.exists).ok()
        .expect(firstPhoto.exists).ok();
});