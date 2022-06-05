import Enzyme, {shallow} from 'enzyme';
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Container from '../../components/Container';

Enzyme.configure({ adapter: new Adapter() });

describe('Pruebas en <Table/>',() => {

    test('Probar busqueda en input', () =>{
        const wrapper = shallow(<Container/>)
        const input = wrapper.find('input');
        const value = 'Cristian';
        input.simulate('change', {target : {value}});
        expect(wrapper.find('input').text().trim()).toBe('');

    })

   

    
})