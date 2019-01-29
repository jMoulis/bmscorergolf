import styled from '@emotion/styled';

const HugeImage = styled.div`
  min-height: 90vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(${({ theme }) => theme.colors.darkGray.rgb}, 0.45),
      rgba(${({ theme }) => theme.colors.darkGray.rgb}, 0.45)
    ),
    url(${({ img }) => img});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

export default HugeImage;
