import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';
import React, { Component } from 'react';
import { createRenderer } from 'react-addons-test-utils';
import ShowMore from '../src/ShowMore';

const expect = unexpected.clone()
    .use(unexpectedReact)
;

describe('<ShowMore />', () => {
    it('should be a React component', () => {
        expect(ShowMore, 'to be a', Component.constructor);
    });

    it('should render a div', () => {
        const renderer = createRenderer();
        renderer.render(<ShowMore />);

        expect(renderer, 'to have rendered', <div />);
    });
});
