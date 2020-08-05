import React from 'react';
import { mount } from 'enzyme';
import Index from '../index';

/**
 *
 * @author Rodrigo Santos de Souza
 * @description Teste automartizado usando Jest para validar se a pagina index existe
 *
 */
describe('Index page', () => {
    it('should have Index component', () => {
        const subject = mount(<Index />);

        expect(subject.find('Index')).toHaveLength(1);
    });
});
