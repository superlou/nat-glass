import { module, test } from 'qunit';
import { setupRenderingTest } from 'nat-glass/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | glass-viewer', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<GlassViewer />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <GlassViewer>
        template block text
      </GlassViewer>
    `);

    assert.dom().hasText('template block text');
  });
});
