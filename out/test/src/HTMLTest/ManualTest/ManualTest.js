'use strict';

var _util = require('./../../util.js');

/** @test {ManualDocBuilder} */
describe('test manual', () => {
  describe('test navigation', () => {
    it('has manual link in header', () => {
      const doc = (0, _util.readDoc)('index.html');
      _util.assert.includes(doc, '[data-ice="manualHeaderLink"]', 'Manual');
      _util.assert.includes(doc, '[data-ice="manualHeaderLink"]', './manual/index.html', 'href');
    });

    /** @test {ManualDocBuilder#_buildManualNav} */
    it('has manual navigation', () => {
      const doc = (0, _util.readDoc)('manual/index.html');
      (0, _util.find)(doc, '[data-ice="nav"]', doc => {
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(1)', 'Overview Feature Demo License Author');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(2)', 'Design Concept Architecture Model');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(3)', 'Installation indent 2 indent 3 indent 4 indent 5');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(4)', 'Tutorial');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(5)', 'Usage Usage2 h2 in usage2 h3 in usage2');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(6)', 'Configuration');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(7)', 'Advanced');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(8)', 'Example Minimum Config Integration Test Code Into Documentation');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(9)', 'Reference Class Interface Function Variable Typedef External');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(10)', 'FAQ Goal');
        _util.assert.includes(doc, '[data-ice="manual"]:nth-of-type(11)', 'Changelog 0.0.1');

        // overview
        (0, _util.find)(doc, '[data-ice="manual"]:nth-of-type(1)', doc => {
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/overview/overview.html', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a', 'manual/overview/overview.html#feature', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(3) a', 'manual/overview/overview.html#demo', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(4) a', 'manual/overview/overview.html#license', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(5) a', 'manual/overview/overview.html#author', 'href');
        });

        // design
        (0, _util.find)(doc, '[data-ice="manual"]:nth-of-type(2)', doc => {
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/design/design.html', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a', 'manual/design/design.html#concept', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(3) a', 'manual/design/design.html#architecture', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(4) a', 'manual/design/design.html#model', 'href');
        });

        // installation
        (0, _util.find)(doc, '[data-ice="manual"]:nth-of-type(3)', doc => {
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/installation/installation.html', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a', 'manual/installation/installation.html#indent-2', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(3) a', 'manual/installation/installation.html#indent-3', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(4) a', 'manual/installation/installation.html#indent-4', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(5) a', 'manual/installation/installation.html#indent-5', 'href');
        });

        // tutorial
        (0, _util.find)(doc, '[data-ice="manual"]:nth-of-type(4)', doc => {
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/tutorial/tutorial.html', 'href');
        });

        // usage
        (0, _util.find)(doc, '[data-ice="manual"]:nth-of-type(5)', doc => {
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/usage/usage1.html', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a', 'manual/usage/usage2.html', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(3) a', 'manual/usage/usage2.html#h2-in-usage2', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(4) a', 'manual/usage/usage2.html#h3-in-usage2', 'href');
        });

        // configuration
        (0, _util.find)(doc, '[data-ice="manual"]:nth-of-type(6)', doc => {
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/configuration/configuration.html', 'href');
        });

        // advanced
        (0, _util.find)(doc, '[data-ice="manual"]:nth-of-type(7)', doc => {
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/advanced/advanced.html', 'href');
        });

        // example
        (0, _util.find)(doc, '[data-ice="manual"]:nth-of-type(8)', doc => {
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/example/example.html', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a', 'manual/example/example.html#minimum-config', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(3) a', 'manual/example/example.html#integration-test-code-into-documentation', 'href');
        });

        // reference
        (0, _util.find)(doc, '[data-ice="manual"]:nth-of-type(9)', doc => {
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'identifiers.html', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a', 'identifiers.html#class', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(3) a', 'identifiers.html#interface', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(4) a', 'identifiers.html#function', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(5) a', 'identifiers.html#variable', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(6) a', 'identifiers.html#typedef', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(7) a', 'identifiers.html#external', 'href');
        });

        // faq
        (0, _util.find)(doc, '[data-ice="manual"]:nth-of-type(10)', doc => {
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/faq/faq.html', 'href');
        });

        // changelog
        (0, _util.find)(doc, '[data-ice="manual"]:nth-of-type(11)', doc => {
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(1) a', 'manual/changelog/CHANGELOG.html', 'href');
          _util.assert.includes(doc, '[data-ice="manualNav"]:nth-of-type(2) a', 'manual/changelog/CHANGELOG.html#0-0-1', 'href');
        });
      });
    });
  });

  /** @test {ManualDocBuilder#_buildManualIndex} */
  describe('test each heading tags', () => {
    const doc = (0, _util.readDoc)('manual/index.html');

    it('has overview heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(1)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'Overview');
        _util.assert.includes(doc, '.manual-card > a', 'manual/overview/overview.html', 'href');
      });
    });

    it('has design heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(2)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'Design');
        _util.assert.includes(doc, '.manual-card > a', 'manual/design/design.html', 'href');
      });
    });

    it('has installation heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(3)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'Installation');
        _util.assert.includes(doc, '.manual-card > a', 'manual/installation/installation.html', 'href');
      });
    });

    it('has tutorial heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(4)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'Tutorial');
        _util.assert.includes(doc, '.manual-card > a', 'manual/tutorial/tutorial.html', 'href');
      });
    });

    it('has usage heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(5)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'Usage');
        _util.assert.includes(doc, '.manual-card > a', 'manual/usage/usage1.html', 'href');
      });
    });

    it('has usage2 heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(6)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'Usage2');
        _util.assert.includes(doc, '.manual-card > a', 'manual/usage/usage2.html', 'href');
      });
    });

    it('has configuration heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(7)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'Configuration');
        _util.assert.includes(doc, '.manual-card > a', 'manual/configuration/configuration.html', 'href');
      });
    });

    it('has advanced heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(8)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'Advanced');
        _util.assert.includes(doc, '.manual-card > a', 'manual/advanced/advanced.html', 'href');
      });
    });

    it('has example heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(9)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'Example');
        _util.assert.includes(doc, '.manual-card > a', 'manual/example/example.html', 'href');
      });
    });

    it('has reference heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(10)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'Reference');
        _util.assert.includes(doc, '.manual-card > a', 'identifiers.html', 'href');
      });
    });

    it('has faq heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(11)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'FAQ');
        _util.assert.includes(doc, '.manual-card > a', 'manual/faq/faq.html', 'href');
      });
    });

    it('has changelog heading tags', () => {
      (0, _util.find)(doc, '.manual-card-wrap:nth-of-type(12)', doc => {
        _util.assert.includes(doc, 'h1[data-ice="label"]', 'Changelog');
        _util.assert.includes(doc, '.manual-card > a', 'manual/changelog/CHANGELOG.html', 'href');
      });
    });
  });

  /** @test {ManualDocBuilder#_buildManual} */
  describe('test each manual', () => {
    it('has overview', () => {
      const doc = (0, _util.readDoc)('manual/overview/overview.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Overview');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'ESDoc is a documentation generator for JavaScript(ES6).');
    });

    it('has installation', () => {
      const doc = (0, _util.readDoc)('manual/installation/installation.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Installation');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'npm install -g esdoc');
    });

    it('has usage', () => {
      const doc = (0, _util.readDoc)('manual/usage/usage1.html');
      _util.assert.includes(doc, '.github-markdown h1:nth-of-type(1)', 'Usage');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'esdoc -c esdoc.json');
    });

    it('has tutorial', () => {
      const doc = (0, _util.readDoc)('manual/tutorial/tutorial.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Tutorial');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'this is tutorial');
    });

    it('has configuration', () => {
      const doc = (0, _util.readDoc)('manual/configuration/configuration.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Configuration');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'this is configuration');
    });

    it('has example', () => {
      const doc = (0, _util.readDoc)('manual/example/example.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Example');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"] h2:nth-of-type(1)', 'Minimum Config');
    });

    it('has faq', () => {
      const doc = (0, _util.readDoc)('manual/faq/faq.html');
      _util.assert.includes(doc, '.github-markdown h1', 'FAQ');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"]', 'ESDoc has two goals.');
    });

    it('has changelog', () => {
      const doc = (0, _util.readDoc)('manual/changelog/CHANGELOG.html');
      _util.assert.includes(doc, '.github-markdown h1', 'Changelog');
      _util.assert.includes(doc, '.github-markdown [data-ice="content"] h2:nth-of-type(1)', '0.0.1');
    });
  });
});