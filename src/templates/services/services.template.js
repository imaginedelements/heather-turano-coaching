import React from "react";
import PropTypes from "prop-types";

import {
  Section,
  SectionItem,
  Paragraph,
  FooterImage,
  InteractiveCircleList
} from "../../components";

export const ServicesPageTemplate = ({
  main: {
    title: mainTitle,
    blurb: mainBlurb
    // contactForm: { inputPlaceholder, emailPlaceholder, buttonLabel }
  },
  pillars: { title: pillarsTitle, description: pillarsDescription, pillarList },
  approach: {
    title: approachTitle,
    content: approachContent,
    image: approachImage
  }
}) => (
  <>
    <Section title={mainTitle}>
      <SectionItem>
        <Paragraph>{mainBlurb}</Paragraph>
      </SectionItem>
      <SectionItem>contactFormPlaceholder</SectionItem>
    </Section>
    <Section title={pillarsTitle} styleType="alt">
      <SectionItem>
        <Paragraph>{pillarsDescription}</Paragraph>
      </SectionItem>
      <SectionItem>
        <InteractiveCircleList list={pillarList} />
      </SectionItem>
    </Section>
    <FooterImage img={approachImage} alt={approachTitle}>
      <Section title={approachTitle} styleType="transparent">
        <Paragraph>
          dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Nulla vitae elit libero, a pharetra augue. Maecenas
          sed diam eget risus varius blandit sit amet non magna. Vivamus
          sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere
          consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo,
          tortor mauris condimentum nibh, ut fermentum massa justo sit amet
          risus. Nulla vitae elit libero, a pharetra augue.Cras mattis
          consectetur purus sit amet fermentum. Donec id elit non mi porta
          gravida at eget metus. Maecenas sed diam eget risus varius blandit sit
          amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum
          at eros. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a
          pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Donec sed odio dui. Vivamus
          sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget
          risus varius blandit sit amet non magna. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus
          ac facilisis in, egestas eget quam. Sed posuere consectetur est at
          lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae
          elit libero, a pharetra augue.Cras mattis consectetur purus sit amet
          fermentum. Donec id elit non mi porta gravida at eget metus. Maecenas
          sed diam eget risus varius blandit sit amet non magna. Morbi leo
          risus, porta ac consectetur ac, vestibulum at eros. Morbi leo risus,
          porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget
          urna mollis ornare vel eu leo. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Nulla vitae elit libero, a pharetra augue.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Donec sed odio dui. Donec sed odio dui. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero, a
          pharetra augue. Maecenas sed diam eget risus varius blandit sit amet
          non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus
          ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus. Nulla vitae elit libero, a pharetra augue.Cras
          mattis consectetur purus sit amet fermentum. Donec id elit non mi
          porta gravida at eget metus. Maecenas sed diam eget risus varius
          blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros. Morbi leo risus, porta ac consectetur ac,
          vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu
          leo. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Nulla vitae elit libero, a pharetra augue. Maecenas
          sed diam eget risus varius blandit sit amet non magna. Vivamus
          sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras
          justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere
          consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo,
          tortor mauris condimentum nibh, ut fermentum massa justo sit amet
          risus. Nulla vitae elit libero, a pharetra augue.Cras mattis
          consectetur purus sit amet fermentum. Donec id elit non mi porta
          gravida at eget metus. Maecenas sed diam eget risus varius blandit sit
          amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum
          at eros. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          Nullam quis risus eget urna mollis ornare vel eu leo. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a
          pharetra augue. Praesent commodo cursus magna, vel scelerisque nisl
          consectetur et. Donec sed odio dui. Donec sed odio dui. Vivamus
          sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget
          risus varius blandit sit amet non magna. Vivamus sagittis lacus vel
          augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus
          ac facilisis in, egestas eget quam. Sed posuere consectetur est at
          lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris
          condimentum nibh, ut fermentum massa justo sit amet risus. Nulla vitae
          elit libero, a pharetra augue.
        </Paragraph>
      </Section>
    </FooterImage>
  </>
);

ServicesPageTemplate.propTypes = {
  main: PropTypes.object.isRequired,
  pillars: PropTypes.object.isRequired,
  approach: PropTypes.object.isRequired
};
