import type { Schema, Struct } from '@strapi/strapi';

export interface AvailableDatesAvailableDates extends Struct.ComponentSchema {
  collectionName: 'components_available_dates_available_dates';
  info: {
    displayName: 'availableDates';
  };
  attributes: {
    Date: Schema.Attribute.Date;
    hour: Schema.Attribute.Time;
  };
}

export interface BadgeInfoBadgeInfo extends Struct.ComponentSchema {
  collectionName: 'components_badge_info_badge_infos';
  info: {
    displayName: 'BadgeInfo';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface BottomButtonBottomButton extends Struct.ComponentSchema {
  collectionName: 'components_bottom_button_bottom_buttons';
  info: {
    displayName: 'BottomButton';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ButtonInfoGalleryButton extends Struct.ComponentSchema {
  collectionName: 'components_button_info_gallery_buttons';
  info: {
    displayName: 'galleryButton';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface ContactInfoContacts extends Struct.ComponentSchema {
  collectionName: 'components_contact_info_contacts_s';
  info: {
    displayName: 'contacts ';
  };
  attributes: {
    callNow: Schema.Attribute.String;
    telegram: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

export interface ContentButtonInfo extends Struct.ComponentSchema {
  collectionName: 'components_content_button_infos';
  info: {
    displayName: 'ButtonInfo';
  };
  attributes: {
    icon: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
  };
}

export interface ContentFacilitiesIntro extends Struct.ComponentSchema {
  collectionName: 'components_content_facilities_intros';
  info: {
    displayName: 'FacilitiesIntro';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ContentFacilityItem extends Struct.ComponentSchema {
  collectionName: 'components_content_facility_items';
  info: {
    displayName: 'FacilityItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContentFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_content_feature_items';
  info: {
    description: 'Represents a feature in the "Why Choose Us" section, sourced from frontend-master/src/components/HowItWorks.tsx';
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ContentHeroGalleryInfo extends Struct.ComponentSchema {
  collectionName: 'components_content_hero_gallery_infos';
  info: {
    displayName: 'HeroGalleryInfo';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlight: Schema.Attribute.String;
    titleAccent: Schema.Attribute.String;
  };
}

export interface ContentHowItWorksStep extends Struct.ComponentSchema {
  collectionName: 'components_content_how_it_works_steps';
  info: {
    description: 'Represents a step in the "How It Works" section, sourced from frontend-master/src/components/HowItWorks.tsx';
    displayName: 'How It Works Step';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    details: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
  };
}

export interface ContentPrivateEnvironmentButton
  extends Struct.ComponentSchema {
  collectionName: 'components_content_private_environment_buttons';
  info: {
    displayName: 'PrivateEnvironmentButton';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface ContentSlideText extends Struct.ComponentSchema {
  collectionName: 'components_content_slide_texts';
  info: {
    displayName: 'SlideText';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LanguageLanguages extends Struct.ComponentSchema {
  collectionName: 'components_language_languages';
  info: {
    displayName: 'languages';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface MassageCardMassageCard extends Struct.ComponentSchema {
  collectionName: 'components_massage_card_massage_cards';
  info: {
    displayName: 'MassageCard';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    options: Schema.Attribute.Component<'massage-option.massage-option', true>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MassageCommonMassagePackage extends Struct.ComponentSchema {
  collectionName: 'components_massage_common_massage_packages';
  info: {
    displayName: 'MassagePackage';
  };
  attributes: {
    duration: Schema.Attribute.String;
    price: Schema.Attribute.String;
  };
}

export interface MassageExtraExtraFeature extends Struct.ComponentSchema {
  collectionName: 'components_massage_extra_extra_features';
  info: {
    displayName: 'ExtraFeature';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface MassageExtraFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_massage_extra_feature_items';
  info: {
    displayName: 'FeatureItem';
  };
  attributes: {
    apiid: Schema.Attribute.Text;
    name: Schema.Attribute.Text;
  };
}

export interface MassageExtraMassageExtraCard extends Struct.ComponentSchema {
  collectionName: 'components_massage_extra_massage_extra_cards';
  info: {
    displayName: 'MassageExtraCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'massage-extra.extra-feature', true>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    note: Schema.Attribute.Text;
    price: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MassageExtraPartyCard extends Struct.ComponentSchema {
  collectionName: 'components_massage_extra_party_cards';
  info: {
    displayName: 'PartyCard';
  };
  attributes: {
    features: Schema.Attribute.Component<'massage-extra.feature-item', true>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    note: Schema.Attribute.Text;
    price: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MassageJacuzziJacuzziService extends Struct.ComponentSchema {
  collectionName: 'components_massage_jacuzzi_jacuzzi_services';
  info: {
    displayName: 'JacuzziService';
  };
  attributes: {
    icon: Schema.Attribute.String;
    packages: Schema.Attribute.Component<
      'massage-common.massage-package',
      true
    >;
    sectionTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MassageOptionMassageOption extends Struct.ComponentSchema {
  collectionName: 'components_massage_option_massage_options';
  info: {
    displayName: 'MassageOption';
  };
  attributes: {
    duration: Schema.Attribute.String;
    notes: Schema.Attribute.Text;
    price: Schema.Attribute.String;
  };
}

export interface MassageSpecialSpecialOption extends Struct.ComponentSchema {
  collectionName: 'components_massage_special_special_options';
  info: {
    displayName: 'SpecialOption';
  };
  attributes: {
    name: Schema.Attribute.Text;
    note: Schema.Attribute.Text;
    price: Schema.Attribute.String;
    sectionTitle: Schema.Attribute.String;
  };
}

export interface NavigationNavItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_nav_items';
  info: {
    description: 'Represents a navigation item in the header, sourced from frontend-master/src/components/Header.tsx';
    displayName: 'Nav Item';
  };
  attributes: {
    href: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface NavigationQuickLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_quick_links';
  info: {
    description: 'Represents a quick link in the footer, sourced from frontend-master/src/components/Footer.tsx';
    displayName: 'Quick Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    name: Schema.Attribute.String;
    navigation: Schema.Attribute.Component<'navigation.nav-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface NavigationServiceLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_service_links';
  info: {
    description: 'Represents a service link in the footer, sourced from frontend-master/src/components/Footer.tsx';
    displayName: 'Service Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface NavigationSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_social_links';
  info: {
    description: 'Represents a social media link in the footer, sourced from frontend-master/src/components/Footer.tsx';
    displayName: 'Social Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface ServicesServices extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface SpecialtiesSpecialties extends Struct.ComponentSchema {
  collectionName: 'components_specialties_specialties';
  info: {
    displayName: 'specialties';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface WhyChooseBottomCardBottomCard extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_bottom_card_bottom_card_s';
  info: {
    displayName: 'bottomCard ';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WhyChooseButtonButton extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_button_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    icon: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface WhyChooseCardCard extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_card_card_s';
  info: {
    displayName: 'card ';
  };
  attributes: {
    description: Schema.Attribute.Text;
    footer: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WhyChooseContentWhyChooseCard extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_content_why_choose_cards';
  info: {
    displayName: 'WhyChooseCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    footer: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'available-dates.available-dates': AvailableDatesAvailableDates;
      'badge-info.badge-info': BadgeInfoBadgeInfo;
      'bottom-button.bottom-button': BottomButtonBottomButton;
      'button-info.gallery-button': ButtonInfoGalleryButton;
      'contact-info.contacts': ContactInfoContacts;
      'content.button-info': ContentButtonInfo;
      'content.facilities-intro': ContentFacilitiesIntro;
      'content.facility-item': ContentFacilityItem;
      'content.feature-item': ContentFeatureItem;
      'content.hero-gallery-info': ContentHeroGalleryInfo;
      'content.how-it-works-step': ContentHowItWorksStep;
      'content.private-environment-button': ContentPrivateEnvironmentButton;
      'content.slide-text': ContentSlideText;
      'language.languages': LanguageLanguages;
      'massage-card.massage-card': MassageCardMassageCard;
      'massage-common.massage-package': MassageCommonMassagePackage;
      'massage-extra.extra-feature': MassageExtraExtraFeature;
      'massage-extra.feature-item': MassageExtraFeatureItem;
      'massage-extra.massage-extra-card': MassageExtraMassageExtraCard;
      'massage-extra.party-card': MassageExtraPartyCard;
      'massage-jacuzzi.jacuzzi-service': MassageJacuzziJacuzziService;
      'massage-option.massage-option': MassageOptionMassageOption;
      'massage-special.special-option': MassageSpecialSpecialOption;
      'navigation.nav-item': NavigationNavItem;
      'navigation.quick-link': NavigationQuickLink;
      'navigation.service-link': NavigationServiceLink;
      'navigation.social-link': NavigationSocialLink;
      'services.services': ServicesServices;
      'specialties.specialties': SpecialtiesSpecialties;
      'why-choose-bottom-card.bottom-card': WhyChooseBottomCardBottomCard;
      'why-choose-button.button': WhyChooseButtonButton;
      'why-choose-card.card': WhyChooseCardCard;
      'why-choose-content.why-choose-card': WhyChooseContentWhyChooseCard;
    }
  }
}
