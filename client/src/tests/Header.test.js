import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import { Header } from "../components/Header/Header";

const setUp = (props) => shallow(<Header {...props} />);

configure({ adapter: new Adapter() });
test("message box", () => {
    describe("should render Header component", () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });

        it("should render Header component", () => {
            const wrapper = component.find(".header");
            expect(wrapper.length).toBe(1);
        });

        it("should contain link", () => {
            const wrapper = component.find("a");
            expect(wrapper.length).toBe(1);
        });
    });
});
