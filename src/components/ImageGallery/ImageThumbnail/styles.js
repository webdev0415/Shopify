import styled from 'styled-components'

export const ImageThumbnailWrapper = styled.div`
    cursor: pointer;
    border: 4px solid ${props => props.isActive ? '#99ca3b' : '#eee'};
`