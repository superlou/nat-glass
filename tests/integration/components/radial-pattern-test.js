import { module, test } from 'qunit';
import { setupRenderingTest } from 'nat-glass/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | radial-pattern', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RadialPattern />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <RadialPattern>
        template block text
      </RadialPattern>
    `);

    assert.dom().hasText('template block text');
  });
});
