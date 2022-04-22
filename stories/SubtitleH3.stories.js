import { createText } from "./SubtitleH3";

export default {
    title: "Typo/Subtitles H3",
    argTypes: {
        color: {
            options: [
                'goldD1',
                'goldD2',
                'goldD3',
                'goldD4',
                'goldL1',
                'goldL2',
                'goldL3',
                'goldL4',
                'black',
                'white',
                'greyD1',
                'greyD2',
                'greyD3',
                'greyD4',
                'greyL1',
                'greyL2',
                'greyL3',
                'blue-09',
                'greyL4',
                'greenD1',
                'greenD2',
                'greenD3',
                'greenD4',
                'greenL1',
                'greenL2',
                'greenL3',
                'greenL4',
                'redD1',
                'redD2',
                'redD3',
                'redD4',
                'redL1',
                'redL2',
                'redL3',
                'redL4',
            ],
            control: { type: 'select' }
        }
    }
}

const Template = ({ label, ...args }) => {
    return createText({ label, ...args })
}

export const Subtitle_H3 = Template.bind({})
Subtitle_H3.args = {
    color: 'black',
    label: 'Montserrat',
}

