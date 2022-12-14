import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Color: string;
  Date: any;
  DateTime: string;
  RichText: Node[];
  Slug: string;
  Upload: File;
  Value: any;
};

export type AllowedSettingVals = {
  __typename?: 'AllowedSettingVals';
  boolChoice?: Maybe<Scalars['Boolean']>;
  stringChoice?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Article = {
  __typename?: 'Article';
  createdAt: Scalars['DateTime'];
  draft?: Maybe<ArticleRevision>;
  id: Scalars['ID'];
  latest: ArticleRevision;
  modifiedAt: Scalars['DateTime'];
  pending?: Maybe<ArticleRevision>;
  published?: Maybe<ArticleRevision>;
  shared: Scalars['Boolean'];
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  nodes: Array<Article>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ArticleFilter = {
  authors?: InputMaybe<Array<Scalars['ID']>>;
  draft?: InputMaybe<Scalars['Boolean']>;
  pending?: InputMaybe<Scalars['Boolean']>;
  published?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ArticleInput = {
  authorIDs: Array<Scalars['ID']>;
  blocks: Array<BlockInput>;
  breaking: Scalars['Boolean'];
  canonicalUrl?: InputMaybe<Scalars['String']>;
  hideAuthor: Scalars['Boolean'];
  imageID?: InputMaybe<Scalars['ID']>;
  lead?: InputMaybe<Scalars['String']>;
  preTitle?: InputMaybe<Scalars['String']>;
  properties: Array<PropertiesInput>;
  seoTitle?: InputMaybe<Scalars['String']>;
  shared: Scalars['Boolean'];
  slug?: InputMaybe<Scalars['Slug']>;
  socialMediaAuthorIDs: Array<Scalars['ID']>;
  socialMediaDescription?: InputMaybe<Scalars['String']>;
  socialMediaImageID?: InputMaybe<Scalars['ID']>;
  socialMediaTitle?: InputMaybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type ArticleNavigationLink = BaseNavigationLink & {
  __typename?: 'ArticleNavigationLink';
  article?: Maybe<Article>;
  label: Scalars['String'];
};

export type ArticleNavigationLinkInput = {
  articleID: Scalars['ID'];
  label: Scalars['String'];
};

export type ArticleRevision = {
  __typename?: 'ArticleRevision';
  authors: Array<Maybe<Author>>;
  blocks: Array<Block>;
  breaking: Scalars['Boolean'];
  canonicalUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  hideAuthor: Scalars['Boolean'];
  image?: Maybe<Image>;
  lead?: Maybe<Scalars['String']>;
  preTitle?: Maybe<Scalars['String']>;
  properties: Array<Properties>;
  publishAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  revision: Scalars['Int'];
  seoTitle?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  socialMediaAuthors: Array<Author>;
  socialMediaDescription?: Maybe<Scalars['String']>;
  socialMediaImage?: Maybe<Image>;
  socialMediaTitle?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export enum ArticleSort {
  CreatedAt = 'CREATED_AT',
  ModifiedAt = 'MODIFIED_AT',
  PublishedAt = 'PUBLISHED_AT',
  PublishAt = 'PUBLISH_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type ArticleTeaser = {
  __typename?: 'ArticleTeaser';
  article?: Maybe<Article>;
  image?: Maybe<Image>;
  lead?: Maybe<Scalars['String']>;
  preTitle?: Maybe<Scalars['String']>;
  style: TeaserStyle;
  title?: Maybe<Scalars['String']>;
};

export type ArticleTeaserInput = {
  articleID: Scalars['ID'];
  imageID?: InputMaybe<Scalars['ID']>;
  lead?: InputMaybe<Scalars['String']>;
  preTitle?: InputMaybe<Scalars['String']>;
  style: TeaserStyle;
  title?: InputMaybe<Scalars['String']>;
};

export type AuthProvider = {
  __typename?: 'AuthProvider';
  name: Scalars['String'];
  url: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  bio?: Maybe<Scalars['RichText']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<Image>;
  jobTitle?: Maybe<Scalars['String']>;
  links?: Maybe<Array<AuthorLink>>;
  modifiedAt: Scalars['DateTime'];
  name: Scalars['String'];
  slug: Scalars['Slug'];
  url: Scalars['String'];
};

export type AuthorConnection = {
  __typename?: 'AuthorConnection';
  nodes: Array<Author>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AuthorFilter = {
  name?: InputMaybe<Scalars['String']>;
};

export type AuthorInput = {
  bio?: InputMaybe<Scalars['RichText']>;
  imageID?: InputMaybe<Scalars['ID']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Array<AuthorLinkInput>>;
  name: Scalars['String'];
  slug: Scalars['Slug'];
};

export type AuthorLink = {
  __typename?: 'AuthorLink';
  title: Scalars['String'];
  url: Scalars['String'];
};

export type AuthorLinkInput = {
  title: Scalars['String'];
  url: Scalars['String'];
};

export enum AuthorSort {
  CreatedAt = 'CREATED_AT',
  ModifiedAt = 'MODIFIED_AT',
  Name = 'NAME'
}

export type AvailablePaymentMethod = {
  __typename?: 'AvailablePaymentMethod';
  forceAutoRenewal: Scalars['Boolean'];
  paymentMethods: Array<PaymentMethod>;
  paymentPeriodicities: Array<PaymentPeriodicity>;
};

export type AvailablePaymentMethodInput = {
  forceAutoRenewal: Scalars['Boolean'];
  paymentMethodIDs: Array<Scalars['String']>;
  paymentPeriodicities: Array<PaymentPeriodicity>;
};

export type BaseNavigationLink = {
  label: Scalars['String'];
};

export type BildwurfAdBlock = {
  __typename?: 'BildwurfAdBlock';
  zoneID: Scalars['String'];
};

export type BildwurfAdBlockInput = {
  zoneID: Scalars['String'];
};

export type Block = BildwurfAdBlock | EmbedBlock | FacebookPostBlock | FacebookVideoBlock | ImageBlock | ImageGalleryBlock | InstagramPostBlock | LinkPageBreakBlock | ListicleBlock | PolisConversationBlock | QuoteBlock | RichTextBlock | SoundCloudTrackBlock | TeaserGridBlock | TeaserGridFlexBlock | TikTokVideoBlock | TitleBlock | TwitterTweetBlock | VimeoVideoBlock | YouTubeVideoBlock;

export type BlockInput = {
  bildwurfAd?: InputMaybe<BildwurfAdBlockInput>;
  embed?: InputMaybe<EmbedBlockInput>;
  facebookPost?: InputMaybe<FacebookPostBlockInput>;
  facebookVideo?: InputMaybe<FacebookVideoBlockInput>;
  image?: InputMaybe<ImageBlockInput>;
  imageGallery?: InputMaybe<ImageGalleryBlockInput>;
  instagramPost?: InputMaybe<InstagramPostBlockInput>;
  linkPageBreak?: InputMaybe<LinkPageBreakBlockInput>;
  listicle?: InputMaybe<ListicleBlockInput>;
  polisConversation?: InputMaybe<PolisConversationBlockInput>;
  quote?: InputMaybe<QuoteBlockInput>;
  richText?: InputMaybe<RichTextBlockInput>;
  soundCloudTrack?: InputMaybe<SoundCloudTrackBlockInput>;
  teaserGrid?: InputMaybe<TeaserGridBlockInput>;
  teaserGridFlex?: InputMaybe<TeaserGridFlexBlockInput>;
  tikTokVideo?: InputMaybe<TikTokVideoBlockInput>;
  title?: InputMaybe<TitleBlockInput>;
  twitterTweet?: InputMaybe<TwitterTweetBlockInput>;
  vimeoVideo?: InputMaybe<VimeoVideoBlockInput>;
  youTubeVideo?: InputMaybe<YouTubeVideoBlockInput>;
};

export type Comment = {
  __typename?: 'Comment';
  authorType: CommentAuthorType;
  createdAt: Scalars['DateTime'];
  guestUsername?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemID: Scalars['ID'];
  itemType: CommentItemType;
  modifiedAt: Scalars['DateTime'];
  parentComment?: Maybe<Comment>;
  rejectionReason?: Maybe<CommentRejectionReason>;
  revisions: Array<CommentRevision>;
  state: CommentState;
  user?: Maybe<User>;
};

export enum CommentAuthorType {
  Author = 'Author',
  Team = 'Team',
  VerifiedUser = 'VerifiedUser'
}

export type CommentConnection = {
  __typename?: 'CommentConnection';
  nodes: Array<Comment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CommentFilter = {
  states?: InputMaybe<Array<CommentState>>;
};

export enum CommentItemType {
  Article = 'Article',
  Page = 'Page'
}

export enum CommentRejectionReason {
  Misconduct = 'Misconduct',
  Spam = 'Spam'
}

export type CommentRevision = {
  __typename?: 'CommentRevision';
  createdAt: Scalars['DateTime'];
  text: Scalars['RichText'];
};

export enum CommentSort {
  CreatedAt = 'CreatedAt',
  ModifiedAt = 'ModifiedAt'
}

export enum CommentState {
  Approved = 'Approved',
  PendingApproval = 'PendingApproval',
  PendingUserChanges = 'PendingUserChanges',
  Rejected = 'Rejected'
}

export type CreatePeerInput = {
  hostURL: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  token: Scalars['String'];
};

export type CreatedToken = {
  __typename?: 'CreatedToken';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  modifiedAt: Scalars['DateTime'];
  name: Scalars['String'];
  token: Scalars['String'];
};

export type DateFilter = {
  comparison: DateFilterComparison;
  date?: InputMaybe<Scalars['DateTime']>;
};

export enum DateFilterComparison {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  GreaterOrEqual = 'GREATER_OR_EQUAL',
  Lower = 'LOWER',
  LowerOrEqual = 'LOWER_OR_EQUAL'
}

export type EmbedBlock = {
  __typename?: 'EmbedBlock';
  height?: Maybe<Scalars['Int']>;
  sandbox?: Maybe<Scalars['String']>;
  styleCustom?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type EmbedBlockInput = {
  height?: InputMaybe<Scalars['Int']>;
  sandbox?: InputMaybe<Scalars['String']>;
  styleCustom?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ExternalNavigationLink = BaseNavigationLink & {
  __typename?: 'ExternalNavigationLink';
  label: Scalars['String'];
  url: Scalars['String'];
};

export type ExternalNavigationLinkInput = {
  label: Scalars['String'];
  url: Scalars['String'];
};

export type FacebookPostBlock = {
  __typename?: 'FacebookPostBlock';
  postID: Scalars['String'];
  userID: Scalars['String'];
};

export type FacebookPostBlockInput = {
  postID: Scalars['String'];
  userID: Scalars['String'];
};

export type FacebookVideoBlock = {
  __typename?: 'FacebookVideoBlock';
  userID: Scalars['String'];
  videoID: Scalars['String'];
};

export type FacebookVideoBlockInput = {
  userID: Scalars['String'];
  videoID: Scalars['String'];
};

export type FlexAlignment = {
  __typename?: 'FlexAlignment';
  h: Scalars['Int'];
  i: Scalars['String'];
  static: Scalars['Boolean'];
  w: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type FlexAlignmentInput = {
  h: Scalars['Int'];
  i: Scalars['String'];
  static: Scalars['Boolean'];
  w: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type FlexTeaser = {
  __typename?: 'FlexTeaser';
  alignment: FlexAlignment;
  teaser?: Maybe<Teaser>;
};

export type FlexTeaserInput = {
  alignment: FlexAlignmentInput;
  teaser?: InputMaybe<TeaserInput>;
};

export type GalleryImageEdge = {
  __typename?: 'GalleryImageEdge';
  caption?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
};

export type GalleryImageEdgeInput = {
  caption?: InputMaybe<Scalars['String']>;
  imageID?: InputMaybe<Scalars['ID']>;
};

export type Image = {
  __typename?: 'Image';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  extension: Scalars['String'];
  fileSize: Scalars['Int'];
  filename?: Maybe<Scalars['String']>;
  focalPoint?: Maybe<Point>;
  format: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['ID'];
  license?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  modifiedAt: Scalars['DateTime'];
  source?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  transformURL?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width: Scalars['Int'];
};


export type ImageTransformUrlArgs = {
  input?: InputMaybe<ImageTransformation>;
};

export type ImageBlock = {
  __typename?: 'ImageBlock';
  caption?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
};

export type ImageBlockInput = {
  caption?: InputMaybe<Scalars['String']>;
  imageID?: InputMaybe<Scalars['ID']>;
};

export type ImageConnection = {
  __typename?: 'ImageConnection';
  nodes: Array<Image>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ImageFilter = {
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type ImageGalleryBlock = {
  __typename?: 'ImageGalleryBlock';
  images: Array<GalleryImageEdge>;
};

export type ImageGalleryBlockInput = {
  images?: InputMaybe<Array<InputMaybe<GalleryImageEdgeInput>>>;
};

export enum ImageOutput {
  Jpeg = 'JPEG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageRotation {
  Auto = 'AUTO',
  Rotate_0 = 'ROTATE_0',
  Rotate_90 = 'ROTATE_90',
  Rotate_180 = 'ROTATE_180',
  Rotate_270 = 'ROTATE_270'
}

export enum ImageSort {
  CreatedAt = 'CREATED_AT',
  ModifiedAt = 'MODIFIED_AT'
}

export type ImageTransformation = {
  height?: InputMaybe<Scalars['Int']>;
  output?: InputMaybe<ImageOutput>;
  quality?: InputMaybe<Scalars['Float']>;
  rotation?: InputMaybe<ImageRotation>;
  width?: InputMaybe<Scalars['Int']>;
};

export type InputPoint = {
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type InstagramPostBlock = {
  __typename?: 'InstagramPostBlock';
  postID: Scalars['String'];
};

export type InstagramPostBlockInput = {
  postID: Scalars['String'];
};

export type Invoice = {
  __typename?: 'Invoice';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  items: Array<InvoiceItem>;
  mail: Scalars['String'];
  manuallySetAsPaidByUserId?: Maybe<Scalars['ID']>;
  modifiedAt: Scalars['DateTime'];
  paidAt?: Maybe<Scalars['DateTime']>;
  total: Scalars['Int'];
};

export type InvoiceConnection = {
  __typename?: 'InvoiceConnection';
  nodes: Array<Invoice>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type InvoiceFilter = {
  canceledAt?: InputMaybe<Scalars['Date']>;
  mail?: InputMaybe<Scalars['String']>;
  paidAt?: InputMaybe<Scalars['Date']>;
  subscriptionID?: InputMaybe<Scalars['ID']>;
  userID?: InputMaybe<Scalars['ID']>;
};

export type InvoiceInput = {
  description?: InputMaybe<Scalars['String']>;
  items: Array<InvoiceItemInput>;
  mail: Scalars['String'];
  manuallySetAsPaidByUserId?: InputMaybe<Scalars['ID']>;
  paidAt?: InputMaybe<Scalars['DateTime']>;
  subscriptionID?: InputMaybe<Scalars['ID']>;
};

export type InvoiceItem = {
  __typename?: 'InvoiceItem';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  modifiedAt: Scalars['DateTime'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  total: Scalars['Int'];
};

export type InvoiceItemInput = {
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  modifiedAt: Scalars['DateTime'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
};

export enum InvoiceSort {
  CreatedAt = 'CREATED_AT',
  ModifiedAt = 'MODIFIED_AT',
  PaidAt = 'PAID_AT'
}

export type JwtToken = {
  __typename?: 'JWTToken';
  expiresAt: Scalars['String'];
  token: Scalars['String'];
};

export type LinkPageBreakBlock = {
  __typename?: 'LinkPageBreakBlock';
  hideButton: Scalars['Boolean'];
  image?: Maybe<Image>;
  layoutOption?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  linkURL?: Maybe<Scalars['String']>;
  richText: Scalars['RichText'];
  styleOption?: Maybe<Scalars['String']>;
  templateOption?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type LinkPageBreakBlockInput = {
  hideButton: Scalars['Boolean'];
  imageID?: InputMaybe<Scalars['ID']>;
  layoutOption?: InputMaybe<Scalars['String']>;
  linkTarget?: InputMaybe<Scalars['String']>;
  linkText?: InputMaybe<Scalars['String']>;
  linkURL?: InputMaybe<Scalars['String']>;
  richText: Scalars['RichText'];
  styleOption?: InputMaybe<Scalars['String']>;
  templateOption?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type ListicleBlock = {
  __typename?: 'ListicleBlock';
  items: Array<ListicleItem>;
};

export type ListicleBlockInput = {
  items?: InputMaybe<Array<InputMaybe<ListicleItemInput>>>;
};

export type ListicleItem = {
  __typename?: 'ListicleItem';
  image?: Maybe<Image>;
  richText: Scalars['RichText'];
  title: Scalars['String'];
};

export type ListicleItemInput = {
  imageID?: InputMaybe<Scalars['ID']>;
  richText: Scalars['RichText'];
  title: Scalars['String'];
};

export type MemberPlan = {
  __typename?: 'MemberPlan';
  active: Scalars['Boolean'];
  amountPerMonthMin: Scalars['Int'];
  availablePaymentMethods: Array<AvailablePaymentMethod>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['RichText']>;
  id: Scalars['ID'];
  image?: Maybe<Image>;
  modifiedAt: Scalars['DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
};

export type MemberPlanConnection = {
  __typename?: 'MemberPlanConnection';
  nodes: Array<MemberPlan>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MemberPlanFilter = {
  active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type MemberPlanInput = {
  active: Scalars['Boolean'];
  amountPerMonthMin: Scalars['Int'];
  availablePaymentMethods: Array<AvailablePaymentMethodInput>;
  description?: InputMaybe<Scalars['RichText']>;
  imageID?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export enum MemberPlanSort {
  CreatedAt = 'CREATED_AT',
  ModifiedAt = 'MODIFIED_AT'
}

export type Mutation = {
  __typename?: 'Mutation';
  approveComment: Comment;
  createArticle: Article;
  createAuthor?: Maybe<Author>;
  createInvoice?: Maybe<Invoice>;
  createMemberPlan?: Maybe<MemberPlan>;
  createNavigation?: Maybe<Navigation>;
  createPage: Page;
  createPaymentFromInvoice?: Maybe<Payment>;
  createPaymentMethod?: Maybe<PaymentMethod>;
  createPeer: Peer;
  createSession: SessionWithToken;
  createSessionWithJWT: SessionWithToken;
  createSessionWithOAuth2Code: SessionWithToken;
  createSubscription?: Maybe<Subscription>;
  createToken: CreatedToken;
  createUser?: Maybe<User>;
  createUserRole?: Maybe<UserRole>;
  deleteArticle?: Maybe<Article>;
  deleteAuthor?: Maybe<Author>;
  deleteImage?: Maybe<Image>;
  deleteInvoice?: Maybe<Invoice>;
  deleteMemberPlan?: Maybe<MemberPlan>;
  deleteNavigation?: Maybe<Navigation>;
  deletePage?: Maybe<Page>;
  deletePaymentMethod?: Maybe<PaymentMethod>;
  deletePeer?: Maybe<Peer>;
  deleteSubscription?: Maybe<Subscription>;
  deleteToken?: Maybe<CreatedToken>;
  deleteUser?: Maybe<User>;
  deleteUserRole?: Maybe<UserRole>;
  duplicateArticle: Article;
  duplicatePage: Page;
  publishArticle?: Maybe<Article>;
  publishPage?: Maybe<Page>;
  rejectComment: Comment;
  requestChangesOnComment: Comment;
  resetUserPassword?: Maybe<User>;
  revokeActiveSession: Scalars['Boolean'];
  revokeSession: Scalars['Boolean'];
  sendJWTLogin: Scalars['String'];
  sendWebsiteLogin: Scalars['String'];
  sessions: Array<Session>;
  unpublishArticle?: Maybe<Article>;
  unpublishPage?: Maybe<Page>;
  updateArticle?: Maybe<Article>;
  updateAuthor?: Maybe<Author>;
  updateImage?: Maybe<Image>;
  updateInvoice?: Maybe<Invoice>;
  updateMemberPlan?: Maybe<MemberPlan>;
  updateNavigation?: Maybe<Navigation>;
  updatePage?: Maybe<Page>;
  updatePaymentMethod?: Maybe<PaymentMethod>;
  updatePeer: Peer;
  updatePeerProfile: PeerProfile;
  updateSettingList?: Maybe<Array<Maybe<Setting>>>;
  updateSubscription?: Maybe<Subscription>;
  updateUser?: Maybe<User>;
  updateUserRole?: Maybe<UserRole>;
  uploadImage?: Maybe<Image>;
};


export type MutationApproveCommentArgs = {
  id: Scalars['ID'];
};


export type MutationCreateArticleArgs = {
  input: ArticleInput;
};


export type MutationCreateAuthorArgs = {
  input: AuthorInput;
};


export type MutationCreateInvoiceArgs = {
  input: InvoiceInput;
};


export type MutationCreateMemberPlanArgs = {
  input: MemberPlanInput;
};


export type MutationCreateNavigationArgs = {
  input: NavigationInput;
};


export type MutationCreatePageArgs = {
  input: PageInput;
};


export type MutationCreatePaymentFromInvoiceArgs = {
  input: PaymentFromInvoiceInput;
};


export type MutationCreatePaymentMethodArgs = {
  input: PaymentMethodInput;
};


export type MutationCreatePeerArgs = {
  input: CreatePeerInput;
};


export type MutationCreateSessionArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateSessionWithJwtArgs = {
  jwt: Scalars['String'];
};


export type MutationCreateSessionWithOAuth2CodeArgs = {
  code: Scalars['String'];
  name: Scalars['String'];
  redirectUri: Scalars['String'];
};


export type MutationCreateSubscriptionArgs = {
  input: SubscriptionInput;
};


export type MutationCreateTokenArgs = {
  input: TokenInput;
};


export type MutationCreateUserArgs = {
  input: UserInput;
  password: Scalars['String'];
};


export type MutationCreateUserRoleArgs = {
  input: UserRoleInput;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteInvoiceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMemberPlanArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteNavigationArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePageArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePaymentMethodArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePeerArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSubscriptionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTokenArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDuplicateArticleArgs = {
  id: Scalars['ID'];
};


export type MutationDuplicatePageArgs = {
  id: Scalars['ID'];
};


export type MutationPublishArticleArgs = {
  id: Scalars['ID'];
  publishAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};


export type MutationPublishPageArgs = {
  id: Scalars['ID'];
  publishAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};


export type MutationRejectCommentArgs = {
  id: Scalars['ID'];
  rejectionReason: CommentRejectionReason;
};


export type MutationRequestChangesOnCommentArgs = {
  id: Scalars['ID'];
  rejectionReason: CommentRejectionReason;
};


export type MutationResetUserPasswordArgs = {
  id: Scalars['ID'];
  password: Scalars['String'];
  sendMail?: InputMaybe<Scalars['Boolean']>;
};


export type MutationRevokeSessionArgs = {
  id: Scalars['ID'];
};


export type MutationSendJwtLoginArgs = {
  email: Scalars['String'];
  url: Scalars['String'];
};


export type MutationSendWebsiteLoginArgs = {
  email: Scalars['String'];
};


export type MutationUnpublishArticleArgs = {
  id: Scalars['ID'];
};


export type MutationUnpublishPageArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateArticleArgs = {
  id: Scalars['ID'];
  input: ArticleInput;
};


export type MutationUpdateAuthorArgs = {
  id: Scalars['ID'];
  input: AuthorInput;
};


export type MutationUpdateImageArgs = {
  id: Scalars['ID'];
  input: UpdateImageInput;
};


export type MutationUpdateInvoiceArgs = {
  id: Scalars['ID'];
  input: InvoiceInput;
};


export type MutationUpdateMemberPlanArgs = {
  id: Scalars['ID'];
  input: MemberPlanInput;
};


export type MutationUpdateNavigationArgs = {
  id: Scalars['ID'];
  input: NavigationInput;
};


export type MutationUpdatePageArgs = {
  id: Scalars['ID'];
  input: PageInput;
};


export type MutationUpdatePaymentMethodArgs = {
  id: Scalars['ID'];
  input: PaymentMethodInput;
};


export type MutationUpdatePeerArgs = {
  id: Scalars['ID'];
  input: UpdatePeerInput;
};


export type MutationUpdatePeerProfileArgs = {
  input: PeerProfileInput;
};


export type MutationUpdateSettingListArgs = {
  value?: InputMaybe<Array<InputMaybe<UpdateSettingArgs>>>;
};


export type MutationUpdateSubscriptionArgs = {
  id: Scalars['ID'];
  input: SubscriptionInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  input: UserInput;
};


export type MutationUpdateUserRoleArgs = {
  id: Scalars['ID'];
  input: UserRoleInput;
};


export type MutationUploadImageArgs = {
  input: UploadImageInput;
};

export type Navigation = {
  __typename?: 'Navigation';
  id: Scalars['ID'];
  key: Scalars['String'];
  links: Array<NavigationLink>;
  name: Scalars['String'];
};

export type NavigationInput = {
  key: Scalars['String'];
  links: Array<NavigationLinkInput>;
  name: Scalars['String'];
};

export type NavigationLink = ArticleNavigationLink | ExternalNavigationLink | PageNavigationLink;

export type NavigationLinkInput = {
  article?: InputMaybe<ArticleNavigationLinkInput>;
  external?: InputMaybe<ExternalNavigationLinkInput>;
  page?: InputMaybe<PageNavigationLinkInput>;
};

export type OAuth2Account = {
  __typename?: 'OAuth2Account';
  provider: Scalars['String'];
  scope: Scalars['String'];
  type: Scalars['String'];
};

export type Page = {
  __typename?: 'Page';
  createdAt: Scalars['DateTime'];
  draft?: Maybe<PageRevision>;
  id: Scalars['ID'];
  latest: PageRevision;
  modifiedAt: Scalars['DateTime'];
  pending?: Maybe<PageRevision>;
  published?: Maybe<PageRevision>;
  shared: Scalars['Boolean'];
};

export type PageConnection = {
  __typename?: 'PageConnection';
  nodes: Array<Page>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PageInput = {
  blocks: Array<BlockInput>;
  description?: InputMaybe<Scalars['String']>;
  imageID?: InputMaybe<Scalars['ID']>;
  properties: Array<PropertiesInput>;
  slug: Scalars['Slug'];
  socialMediaDescription?: InputMaybe<Scalars['String']>;
  socialMediaImageID?: InputMaybe<Scalars['ID']>;
  socialMediaTitle?: InputMaybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type PageNavigationLink = BaseNavigationLink & {
  __typename?: 'PageNavigationLink';
  label: Scalars['String'];
  page?: Maybe<Page>;
};

export type PageNavigationLinkInput = {
  label: Scalars['String'];
  pageID: Scalars['ID'];
};

export type PageRevision = {
  __typename?: 'PageRevision';
  blocks: Array<Block>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  properties: Array<Properties>;
  publishAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  revision: Scalars['Int'];
  slug: Scalars['Slug'];
  socialMediaDescription?: Maybe<Scalars['String']>;
  socialMediaImage?: Maybe<Image>;
  socialMediaTitle?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export enum PageSort {
  CreatedAt = 'CREATED_AT',
  ModifiedAt = 'MODIFIED_AT',
  PublishedAt = 'PUBLISHED_AT',
  PublishAt = 'PUBLISH_AT',
  UpdatedAt = 'UPDATED_AT'
}

export type PageTeaser = {
  __typename?: 'PageTeaser';
  image?: Maybe<Image>;
  lead?: Maybe<Scalars['String']>;
  page?: Maybe<Page>;
  preTitle?: Maybe<Scalars['String']>;
  style: TeaserStyle;
  title?: Maybe<Scalars['String']>;
};

export type PageTeaserInput = {
  imageID?: InputMaybe<Scalars['ID']>;
  lead?: InputMaybe<Scalars['String']>;
  pageID: Scalars['ID'];
  preTitle?: InputMaybe<Scalars['String']>;
  style: TeaserStyle;
  title?: InputMaybe<Scalars['String']>;
};

export type Payment = {
  __typename?: 'Payment';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  intentData?: Maybe<Scalars['String']>;
  intentID?: Maybe<Scalars['String']>;
  intentSecret?: Maybe<Scalars['String']>;
  invoice: Invoice;
  modifiedAt: Scalars['DateTime'];
  paymentData?: Maybe<Scalars['String']>;
  paymentMethod: PaymentMethod;
  state: PaymentState;
};

export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  nodes: Array<Payment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PaymentFilter = {
  intentID?: InputMaybe<Scalars['String']>;
};

export type PaymentFromInvoiceInput = {
  failureURL?: InputMaybe<Scalars['String']>;
  invoiceID: Scalars['String'];
  paymentMethodID?: InputMaybe<Scalars['ID']>;
  paymentMethodSlug?: InputMaybe<Scalars['Slug']>;
  successURL?: InputMaybe<Scalars['String']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  active: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  modifiedAt: Scalars['DateTime'];
  name: Scalars['String'];
  paymentProvider: PaymentProvider;
  slug: Scalars['Slug'];
};

export type PaymentMethodInput = {
  active: Scalars['Boolean'];
  description: Scalars['String'];
  name: Scalars['String'];
  paymentProviderID: Scalars['String'];
  slug: Scalars['Slug'];
};

export enum PaymentPeriodicity {
  Biannual = 'BIANNUAL',
  Monthly = 'MONTHLY',
  Quarterly = 'QUARTERLY',
  Yearly = 'YEARLY'
}

export type PaymentProvider = {
  __typename?: 'PaymentProvider';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type PaymentProviderCustomer = {
  __typename?: 'PaymentProviderCustomer';
  customerID: Scalars['String'];
  paymentProviderID: Scalars['String'];
};

export enum PaymentSort {
  CreatedAt = 'CREATED_AT',
  ModifiedAt = 'MODIFIED_AT'
}

export enum PaymentState {
  Canceled = 'Canceled',
  Created = 'Created',
  Declined = 'Declined',
  Paid = 'Paid',
  Processing = 'Processing',
  RequiresUserAction = 'RequiresUserAction',
  Submitted = 'Submitted'
}

export type Peer = {
  __typename?: 'Peer';
  createdAt: Scalars['DateTime'];
  hostURL: Scalars['String'];
  id: Scalars['ID'];
  isDisabled?: Maybe<Scalars['Boolean']>;
  modifiedAt: Scalars['DateTime'];
  name: Scalars['String'];
  profile?: Maybe<PeerProfile>;
  slug: Scalars['String'];
};

export type PeerArticle = {
  __typename?: 'PeerArticle';
  article: Article;
  peer: Peer;
  peeredArticleURL: Scalars['String'];
};

export type PeerArticleConnection = {
  __typename?: 'PeerArticleConnection';
  nodes: Array<PeerArticle>;
  pageInfo: UnidirectionalPageInfo;
  totalCount: Scalars['Int'];
};

export type PeerArticleTeaser = {
  __typename?: 'PeerArticleTeaser';
  article?: Maybe<Article>;
  articleID: Scalars['ID'];
  image?: Maybe<Image>;
  lead?: Maybe<Scalars['String']>;
  peer?: Maybe<Peer>;
  preTitle?: Maybe<Scalars['String']>;
  style: TeaserStyle;
  title?: Maybe<Scalars['String']>;
};

export type PeerArticleTeaserInput = {
  articleID: Scalars['ID'];
  imageID?: InputMaybe<Scalars['ID']>;
  lead?: InputMaybe<Scalars['String']>;
  peerID: Scalars['ID'];
  preTitle?: InputMaybe<Scalars['String']>;
  style: TeaserStyle;
  title?: InputMaybe<Scalars['String']>;
};

export type PeerProfile = {
  __typename?: 'PeerProfile';
  callToActionImage?: Maybe<Image>;
  callToActionImageURL?: Maybe<Scalars['String']>;
  callToActionText: Scalars['RichText'];
  callToActionURL: Scalars['String'];
  hostURL: Scalars['String'];
  logo?: Maybe<Image>;
  name: Scalars['String'];
  themeColor: Scalars['Color'];
  themeFontColor: Scalars['Color'];
  websiteURL: Scalars['String'];
};

export type PeerProfileInput = {
  callToActionImageID?: InputMaybe<Scalars['ID']>;
  callToActionImageURL?: InputMaybe<Scalars['String']>;
  callToActionText: Scalars['RichText'];
  callToActionURL: Scalars['String'];
  logoID?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  themeColor: Scalars['Color'];
  themeFontColor: Scalars['Color'];
};

export type Permission = {
  __typename?: 'Permission';
  deprecated: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['String'];
};

export type Point = {
  __typename?: 'Point';
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type PolisConversationBlock = {
  __typename?: 'PolisConversationBlock';
  conversationID: Scalars['String'];
};

export type PolisConversationBlockInput = {
  conversationID: Scalars['String'];
};

export type Properties = {
  __typename?: 'Properties';
  key: Scalars['String'];
  public: Scalars['Boolean'];
  value: Scalars['String'];
};

export type PropertiesInput = {
  key: Scalars['String'];
  public: Scalars['Boolean'];
  value: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  article?: Maybe<Article>;
  articlePreviewLink?: Maybe<Scalars['String']>;
  articles: ArticleConnection;
  authProviders: Array<AuthProvider>;
  author?: Maybe<Author>;
  authors: AuthorConnection;
  comments: CommentConnection;
  createJWTForUser?: Maybe<JwtToken>;
  image?: Maybe<Image>;
  images: ImageConnection;
  invoice?: Maybe<Invoice>;
  invoices: InvoiceConnection;
  me?: Maybe<User>;
  memberPlan?: Maybe<MemberPlan>;
  memberPlans: MemberPlanConnection;
  navigation?: Maybe<Navigation>;
  navigations: Array<Navigation>;
  page?: Maybe<Page>;
  pagePreviewLink?: Maybe<Scalars['String']>;
  pages: PageConnection;
  payment?: Maybe<Payment>;
  paymentMethod?: Maybe<PaymentMethod>;
  paymentMethods: Array<PaymentMethod>;
  paymentProviders: Array<PaymentProvider>;
  payments: PaymentConnection;
  peer?: Maybe<Peer>;
  peerArticle?: Maybe<Article>;
  peerArticles: PeerArticleConnection;
  peerProfile: PeerProfile;
  peers?: Maybe<Array<Peer>>;
  permissions?: Maybe<Array<Permission>>;
  remotePeerProfile?: Maybe<PeerProfile>;
  sessions: Array<Session>;
  setting?: Maybe<Setting>;
  settings: Array<Setting>;
  subscription?: Maybe<Subscription>;
  subscriptions: SubscriptionConnection;
  subscriptionsAsCsv?: Maybe<Scalars['String']>;
  tokens: Array<Token>;
  user?: Maybe<User>;
  userRole?: Maybe<UserRole>;
  userRoles: UserRoleConnection;
  users: UserConnection;
};


export type QueryArticleArgs = {
  id: Scalars['ID'];
};


export type QueryArticlePreviewLinkArgs = {
  hours: Scalars['Int'];
  id: Scalars['ID'];
};


export type QueryArticlesArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<ArticleFilter>;
  order?: InputMaybe<SortOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ArticleSort>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryAuthProvidersArgs = {
  redirectUri?: InputMaybe<Scalars['String']>;
};


export type QueryAuthorArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['Slug']>;
};


export type QueryAuthorsArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<AuthorFilter>;
  order?: InputMaybe<SortOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<AuthorSort>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryCommentsArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<CommentFilter>;
  order?: InputMaybe<SortOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<CommentSort>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryCreateJwtForUserArgs = {
  expiresInMinutes: Scalars['Int'];
  userId: Scalars['String'];
};


export type QueryImageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryImagesArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<ImageFilter>;
  order?: InputMaybe<SortOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSort>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryInvoiceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryInvoicesArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<InvoiceFilter>;
  order?: InputMaybe<SortOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<InvoiceSort>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryMemberPlanArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['Slug']>;
};


export type QueryMemberPlansArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<MemberPlanFilter>;
  order?: InputMaybe<SortOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<MemberPlanSort>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryNavigationArgs = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['ID']>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPagePreviewLinkArgs = {
  hours: Scalars['Int'];
  id: Scalars['ID'];
};


export type QueryPagesArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<ArticleFilter>;
  order?: InputMaybe<SortOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PageSort>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentMethodArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentsArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<PaymentFilter>;
  order?: InputMaybe<SortOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<PaymentSort>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryPeerArgs = {
  id: Scalars['ID'];
};


export type QueryPeerArticleArgs = {
  id: Scalars['ID'];
  peerID: Scalars['ID'];
};


export type QueryPeerArticlesArgs = {
  cursors?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<ArticleFilter>;
  order?: InputMaybe<SortOrder>;
  peerFilter?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<ArticleSort>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryRemotePeerProfileArgs = {
  hostURL: Scalars['String'];
  token: Scalars['String'];
};


export type QuerySettingArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QuerySubscriptionArgs = {
  id: Scalars['ID'];
};


export type QuerySubscriptionsArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<SubscriptionFilter>;
  order?: InputMaybe<SortOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SubscriptionSort>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QuerySubscriptionsAsCsvArgs = {
  filter?: InputMaybe<SubscriptionFilter>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUserRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUserRolesArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<UserRoleFilter>;
  order?: InputMaybe<SortOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<UserRoleSort>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<Scalars['ID']>;
  filter?: InputMaybe<UserFilter>;
  order?: InputMaybe<SortOrder>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<UserSort>;
  take?: InputMaybe<Scalars['Int']>;
};

export type QuoteBlock = {
  __typename?: 'QuoteBlock';
  author?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
};

export type QuoteBlockInput = {
  author?: InputMaybe<Scalars['String']>;
  quote?: InputMaybe<Scalars['String']>;
};

export type RichTextBlock = {
  __typename?: 'RichTextBlock';
  richText: Scalars['RichText'];
};

export type RichTextBlockInput = {
  richText: Scalars['RichText'];
};

export type Session = {
  __typename?: 'Session';
  createdAt: Scalars['DateTime'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['ID'];
  user: User;
};

export type SessionWithToken = {
  __typename?: 'SessionWithToken';
  createdAt: Scalars['DateTime'];
  expiresAt: Scalars['DateTime'];
  id: Scalars['ID'];
  token: Scalars['String'];
  user: User;
};

export type Setting = {
  __typename?: 'Setting';
  id: Scalars['ID'];
  name: SettingName;
  settingRestriction?: Maybe<SettingRestriction>;
  value: Scalars['Value'];
};

export enum SettingName {
  AllowGuestCommenting = 'ALLOW_GUEST_COMMENTING',
  InvoiceReminderFreq = 'INVOICE_REMINDER_FREQ',
  InvoiceReminderMaxTries = 'INVOICE_REMINDER_MAX_TRIES',
  PeeringTimeoutMs = 'PEERING_TIMEOUT_MS',
  ResetPasswordJwtExpiresMin = 'RESET_PASSWORD_JWT_EXPIRES_MIN',
  SendLoginJwtExpiresMin = 'SEND_LOGIN_JWT_EXPIRES_MIN'
}

export type SettingRestriction = {
  __typename?: 'SettingRestriction';
  allowedValues?: Maybe<AllowedSettingVals>;
  inputLength?: Maybe<Scalars['Int']>;
  maxValue?: Maybe<Scalars['Int']>;
  minValue?: Maybe<Scalars['Int']>;
};

export enum SortOrder {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

export type SoundCloudTrackBlock = {
  __typename?: 'SoundCloudTrackBlock';
  trackID: Scalars['String'];
};

export type SoundCloudTrackBlockInput = {
  trackID: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  autoRenew: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  deactivation?: Maybe<SubscriptionDeactivation>;
  id: Scalars['ID'];
  memberPlan: MemberPlan;
  modifiedAt: Scalars['DateTime'];
  monthlyAmount: Scalars['Int'];
  paidUntil?: Maybe<Scalars['DateTime']>;
  paymentMethod: PaymentMethod;
  paymentPeriodicity: PaymentPeriodicity;
  properties: Array<Properties>;
  startsAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type SubscriptionConnection = {
  __typename?: 'SubscriptionConnection';
  nodes: Array<Subscription>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SubscriptionDeactivation = {
  __typename?: 'SubscriptionDeactivation';
  date: Scalars['DateTime'];
  reason: SubscriptionDeactivationReason;
};

export type SubscriptionDeactivationInput = {
  date: Scalars['DateTime'];
  reason: SubscriptionDeactivationReason;
};

export enum SubscriptionDeactivationReason {
  InvoiceNotPaid = 'INVOICE_NOT_PAID',
  None = 'NONE',
  UserSelfDeactivated = 'USER_SELF_DEACTIVATED'
}

export type SubscriptionFilter = {
  autoRenew?: InputMaybe<Scalars['Boolean']>;
  deactivationDateFrom?: InputMaybe<DateFilter>;
  deactivationDateTo?: InputMaybe<DateFilter>;
  deactivationReason?: InputMaybe<SubscriptionDeactivationReason>;
  memberPlanID?: InputMaybe<Scalars['String']>;
  paidUntil?: InputMaybe<DateFilter>;
  paidUntilFrom?: InputMaybe<DateFilter>;
  paidUntilTo?: InputMaybe<DateFilter>;
  paymentMethodID?: InputMaybe<Scalars['String']>;
  paymentPeriodicity?: InputMaybe<PaymentPeriodicity>;
  startsAt?: InputMaybe<DateFilter>;
  startsAtFrom?: InputMaybe<DateFilter>;
  startsAtTo?: InputMaybe<DateFilter>;
  userHasAddress?: InputMaybe<Scalars['Boolean']>;
  userID?: InputMaybe<Scalars['ID']>;
};

export type SubscriptionInput = {
  autoRenew: Scalars['Boolean'];
  deactivation?: InputMaybe<SubscriptionDeactivationInput>;
  memberPlanID: Scalars['String'];
  monthlyAmount: Scalars['Int'];
  paidUntil?: InputMaybe<Scalars['DateTime']>;
  paymentMethodID: Scalars['String'];
  paymentPeriodicity: PaymentPeriodicity;
  properties: Array<PropertiesInput>;
  startsAt: Scalars['DateTime'];
  userID: Scalars['ID'];
};

export type SubscriptionPeriod = {
  __typename?: 'SubscriptionPeriod';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  endsAt: Scalars['DateTime'];
  id: Scalars['ID'];
  invoiceID: Scalars['ID'];
  paymentPeriodicity: PaymentPeriodicity;
  startsAt: Scalars['DateTime'];
};

export enum SubscriptionSort {
  CreatedAt = 'CREATED_AT',
  ModifiedAt = 'MODIFIED_AT'
}

export type Teaser = ArticleTeaser | PageTeaser | PeerArticleTeaser;

export type TeaserGridBlock = {
  __typename?: 'TeaserGridBlock';
  numColumns: Scalars['Int'];
  teasers: Array<Maybe<Teaser>>;
};

export type TeaserGridBlockInput = {
  numColumns: Scalars['Int'];
  teasers: Array<InputMaybe<TeaserInput>>;
};

export type TeaserGridFlexBlock = {
  __typename?: 'TeaserGridFlexBlock';
  flexTeasers: Array<Maybe<FlexTeaser>>;
};

export type TeaserGridFlexBlockInput = {
  flexTeasers: Array<FlexTeaserInput>;
};

export type TeaserInput = {
  article?: InputMaybe<ArticleTeaserInput>;
  page?: InputMaybe<PageTeaserInput>;
  peerArticle?: InputMaybe<PeerArticleTeaserInput>;
};

export enum TeaserStyle {
  Default = 'DEFAULT',
  Light = 'LIGHT',
  Text = 'TEXT'
}

export type TikTokVideoBlock = {
  __typename?: 'TikTokVideoBlock';
  userID: Scalars['String'];
  videoID: Scalars['String'];
};

export type TikTokVideoBlockInput = {
  userID: Scalars['String'];
  videoID: Scalars['String'];
};

export type TitleBlock = {
  __typename?: 'TitleBlock';
  lead?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type TitleBlockInput = {
  lead?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Token = {
  __typename?: 'Token';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  modifiedAt: Scalars['DateTime'];
  name: Scalars['String'];
};

export type TokenInput = {
  name: Scalars['String'];
};

export type TwitterTweetBlock = {
  __typename?: 'TwitterTweetBlock';
  tweetID: Scalars['String'];
  userID: Scalars['String'];
};

export type TwitterTweetBlockInput = {
  tweetID: Scalars['String'];
  userID: Scalars['String'];
};

export type UnidirectionalPageInfo = {
  __typename?: 'UnidirectionalPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
};

export type UpdateImageInput = {
  description?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  focalPoint?: InputMaybe<InputPoint>;
  license?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePeerInput = {
  hostURL?: InputMaybe<Scalars['String']>;
  isDisabled?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type UpdateSettingArgs = {
  name: SettingName;
  value: Scalars['Value'];
};

export type UploadImageInput = {
  description?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  filename?: InputMaybe<Scalars['String']>;
  focalPoint?: InputMaybe<InputPoint>;
  license?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  active: Scalars['Boolean'];
  address?: Maybe<UserAddress>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailVerifiedAt?: Maybe<Scalars['DateTime']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  modifiedAt: Scalars['DateTime'];
  name: Scalars['String'];
  oauth2Accounts: Array<OAuth2Account>;
  paymentProviderCustomers: Array<PaymentProviderCustomer>;
  preferredName?: Maybe<Scalars['String']>;
  properties: Array<Properties>;
  roles: Array<UserRole>;
  subscriptions: Array<UserSubscription>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  city?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddress2?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type UserAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  streetAddress2?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  nodes: Array<User>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserFilter = {
  name?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
};

export type UserInput = {
  active: Scalars['Boolean'];
  address?: InputMaybe<UserAddressInput>;
  email: Scalars['String'];
  emailVerifiedAt?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  preferredName?: InputMaybe<Scalars['String']>;
  properties: Array<PropertiesInput>;
  roleIDs?: InputMaybe<Array<Scalars['String']>>;
};

export type UserRole = {
  __typename?: 'UserRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  permissions: Array<Permission>;
  systemRole: Scalars['Boolean'];
};

export type UserRoleConnection = {
  __typename?: 'UserRoleConnection';
  nodes: Array<UserRole>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserRoleFilter = {
  name?: InputMaybe<Scalars['String']>;
};

export type UserRoleInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  permissionIDs?: InputMaybe<Array<Scalars['String']>>;
};

export enum UserRoleSort {
  CreatedAt = 'CREATED_AT',
  ModifiedAt = 'MODIFIED_AT'
}

export enum UserSort {
  CreatedAt = 'CREATED_AT',
  FirstName = 'FIRST_NAME',
  ModifiedAt = 'MODIFIED_AT',
  Name = 'NAME'
}

export type UserSubscription = {
  __typename?: 'UserSubscription';
  autoRenew: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  deactivation?: Maybe<SubscriptionDeactivation>;
  id: Scalars['ID'];
  invoices: Array<Invoice>;
  memberPlan: MemberPlan;
  modifiedAt: Scalars['DateTime'];
  monthlyAmount: Scalars['Int'];
  paidUntil?: Maybe<Scalars['DateTime']>;
  paymentPeriodicity: PaymentPeriodicity;
  periods: Array<SubscriptionPeriod>;
  properties: Array<Properties>;
  startsAt: Scalars['DateTime'];
};

export type VimeoVideoBlock = {
  __typename?: 'VimeoVideoBlock';
  videoID: Scalars['String'];
};

export type VimeoVideoBlockInput = {
  videoID: Scalars['String'];
};

export type YouTubeVideoBlock = {
  __typename?: 'YouTubeVideoBlock';
  videoID: Scalars['String'];
};

export type YouTubeVideoBlockInput = {
  videoID: Scalars['String'];
};

export type MutationArticleFragment = { __typename?: 'Article', id: string, shared: boolean, draft?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'ArticleRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title?: string | null, preTitle?: string | null, lead?: string | null, slug?: string | null, breaking: boolean, tags: Array<string>, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }> } };

export type ArticleRefFragment = { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } };

export type ArticleListQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['ID']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type ArticleListQuery = { __typename?: 'Query', articles: { __typename?: 'ArticleConnection', totalCount: number, nodes: Array<{ __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } };

export type PeerArticleListQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']>;
  cursors?: InputMaybe<Scalars['String']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type PeerArticleListQuery = { __typename?: 'Query', peerArticles: { __typename?: 'PeerArticleConnection', totalCount: number, nodes: Array<{ __typename?: 'PeerArticle', peer: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null }, article: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } }>, pageInfo: { __typename?: 'UnidirectionalPageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type CreateArticleMutationVariables = Exact<{
  input: ArticleInput;
}>;


export type CreateArticleMutation = { __typename?: 'Mutation', createArticle: { __typename?: 'Article', id: string, shared: boolean, draft?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'ArticleRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title?: string | null, preTitle?: string | null, lead?: string | null, slug?: string | null, breaking: boolean, tags: Array<string>, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }> } } };

export type UpdateArticleMutationVariables = Exact<{
  id: Scalars['ID'];
  input: ArticleInput;
}>;


export type UpdateArticleMutation = { __typename?: 'Mutation', updateArticle?: { __typename?: 'Article', id: string, shared: boolean, draft?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'ArticleRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title?: string | null, preTitle?: string | null, lead?: string | null, slug?: string | null, breaking: boolean, tags: Array<string>, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }> } } | null };

export type PublishArticleMutationVariables = Exact<{
  id: Scalars['ID'];
  publishAt: Scalars['DateTime'];
  publishedAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
}>;


export type PublishArticleMutation = { __typename?: 'Mutation', publishArticle?: { __typename?: 'Article', id: string, shared: boolean, draft?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'ArticleRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title?: string | null, preTitle?: string | null, lead?: string | null, slug?: string | null, breaking: boolean, tags: Array<string>, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }> } } | null };

export type UnpublishArticleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UnpublishArticleMutation = { __typename?: 'Mutation', unpublishArticle?: { __typename?: 'Article', id: string, shared: boolean, draft?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'ArticleRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title?: string | null, preTitle?: string | null, lead?: string | null, slug?: string | null, breaking: boolean, tags: Array<string>, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }> } } | null };

export type DeleteArticleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', deleteArticle?: { __typename?: 'Article', id: string, shared: boolean, draft?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'ArticleRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title?: string | null, preTitle?: string | null, lead?: string | null, slug?: string | null, breaking: boolean, tags: Array<string>, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }> } } | null };

export type ArticleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', id: string, shared: boolean, pending?: { __typename?: 'ArticleRevision', publishAt?: string | null } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, slug?: string | null, preTitle?: string | null, title?: string | null, lead?: string | null, tags: Array<string>, hideAuthor: boolean, breaking: boolean, socialMediaTitle?: string | null, socialMediaDescription?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }>, authors: Array<{ __typename?: 'Author', id: string, name: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null>, socialMediaAuthors: Array<{ __typename?: 'Author', id: string, name: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }>, socialMediaImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, blocks: Array<{ __typename: 'BildwurfAdBlock' } | { __typename: 'EmbedBlock', url?: string | null, title?: string | null, width?: number | null, height?: number | null, styleCustom?: string | null, sandbox?: string | null } | { __typename: 'FacebookPostBlock', userID: string, postID: string } | { __typename: 'FacebookVideoBlock', userID: string, videoID: string } | { __typename: 'ImageBlock', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | { __typename: 'ImageGalleryBlock', images: Array<{ __typename?: 'GalleryImageEdge', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'InstagramPostBlock', postID: string } | { __typename: 'LinkPageBreakBlock', text?: string | null, linkText?: string | null, linkURL?: string | null } | { __typename: 'ListicleBlock', items: Array<{ __typename?: 'ListicleItem', title: string, richText: Node[], image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'PolisConversationBlock' } | { __typename: 'QuoteBlock', quote?: string | null, author?: string | null } | { __typename: 'RichTextBlock', richText: Node[] } | { __typename: 'SoundCloudTrackBlock', trackID: string } | { __typename: 'TeaserGridBlock', numColumns: number, teasers: Array<{ __typename?: 'ArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PageTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PeerArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, articleID: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, peer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | null> } | { __typename: 'TeaserGridFlexBlock' } | { __typename: 'TikTokVideoBlock' } | { __typename: 'TitleBlock', title?: string | null, lead?: string | null } | { __typename: 'TwitterTweetBlock', userID: string, tweetID: string } | { __typename: 'VimeoVideoBlock', videoID: string } | { __typename: 'YouTubeVideoBlock', videoID: string }> } } | null };

export type AuthorRefFragment = { __typename?: 'Author', id: string, name: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null };

export type FullAuthorFragment = { __typename?: 'Author', slug: string, bio?: Node[] | null, id: string, name: string, links?: Array<{ __typename?: 'AuthorLink', title: string, url: string }> | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null };

export type AuthorListQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['ID']>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type AuthorListQuery = { __typename?: 'Query', authors: { __typename?: 'AuthorConnection', totalCount: number, nodes: Array<{ __typename?: 'Author', slug: string, bio?: Node[] | null, id: string, name: string, links?: Array<{ __typename?: 'AuthorLink', title: string, url: string }> | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } };

export type AuthorQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AuthorQuery = { __typename?: 'Query', author?: { __typename?: 'Author', slug: string, bio?: Node[] | null, id: string, name: string, links?: Array<{ __typename?: 'AuthorLink', title: string, url: string }> | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null };

export type CreateAuthorMutationVariables = Exact<{
  input: AuthorInput;
}>;


export type CreateAuthorMutation = { __typename?: 'Mutation', createAuthor?: { __typename?: 'Author', slug: string, bio?: Node[] | null, id: string, name: string, links?: Array<{ __typename?: 'AuthorLink', title: string, url: string }> | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null };

export type UpdateAuthorMutationVariables = Exact<{
  id: Scalars['ID'];
  input: AuthorInput;
}>;


export type UpdateAuthorMutation = { __typename?: 'Mutation', updateAuthor?: { __typename?: 'Author', slug: string, bio?: Node[] | null, id: string, name: string, links?: Array<{ __typename?: 'AuthorLink', title: string, url: string }> | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null };

export type DeleteAuthorMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteAuthorMutation = { __typename?: 'Mutation', deleteAuthor?: { __typename?: 'Author', slug: string, bio?: Node[] | null, id: string, name: string, links?: Array<{ __typename?: 'AuthorLink', title: string, url: string }> | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null };

type FullTeaser_ArticleTeaser_Fragment = { __typename?: 'ArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null };

type FullTeaser_PageTeaser_Fragment = { __typename?: 'PageTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null };

type FullTeaser_PeerArticleTeaser_Fragment = { __typename?: 'PeerArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, articleID: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, peer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null };

export type FullTeaserFragment = FullTeaser_ArticleTeaser_Fragment | FullTeaser_PageTeaser_Fragment | FullTeaser_PeerArticleTeaser_Fragment;

type FullBlock_BildwurfAdBlock_Fragment = { __typename: 'BildwurfAdBlock' };

type FullBlock_EmbedBlock_Fragment = { __typename: 'EmbedBlock', url?: string | null, title?: string | null, width?: number | null, height?: number | null, styleCustom?: string | null, sandbox?: string | null };

type FullBlock_FacebookPostBlock_Fragment = { __typename: 'FacebookPostBlock', userID: string, postID: string };

type FullBlock_FacebookVideoBlock_Fragment = { __typename: 'FacebookVideoBlock', userID: string, videoID: string };

type FullBlock_ImageBlock_Fragment = { __typename: 'ImageBlock', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null };

type FullBlock_ImageGalleryBlock_Fragment = { __typename: 'ImageGalleryBlock', images: Array<{ __typename?: 'GalleryImageEdge', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> };

type FullBlock_InstagramPostBlock_Fragment = { __typename: 'InstagramPostBlock', postID: string };

type FullBlock_LinkPageBreakBlock_Fragment = { __typename: 'LinkPageBreakBlock', text?: string | null, linkText?: string | null, linkURL?: string | null };

type FullBlock_ListicleBlock_Fragment = { __typename: 'ListicleBlock', items: Array<{ __typename?: 'ListicleItem', title: string, richText: Node[], image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> };

type FullBlock_PolisConversationBlock_Fragment = { __typename: 'PolisConversationBlock' };

type FullBlock_QuoteBlock_Fragment = { __typename: 'QuoteBlock', quote?: string | null, author?: string | null };

type FullBlock_RichTextBlock_Fragment = { __typename: 'RichTextBlock', richText: Node[] };

type FullBlock_SoundCloudTrackBlock_Fragment = { __typename: 'SoundCloudTrackBlock', trackID: string };

type FullBlock_TeaserGridBlock_Fragment = { __typename: 'TeaserGridBlock', numColumns: number, teasers: Array<{ __typename?: 'ArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PageTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PeerArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, articleID: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, peer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | null> };

type FullBlock_TeaserGridFlexBlock_Fragment = { __typename: 'TeaserGridFlexBlock' };

type FullBlock_TikTokVideoBlock_Fragment = { __typename: 'TikTokVideoBlock' };

type FullBlock_TitleBlock_Fragment = { __typename: 'TitleBlock', title?: string | null, lead?: string | null };

type FullBlock_TwitterTweetBlock_Fragment = { __typename: 'TwitterTweetBlock', userID: string, tweetID: string };

type FullBlock_VimeoVideoBlock_Fragment = { __typename: 'VimeoVideoBlock', videoID: string };

type FullBlock_YouTubeVideoBlock_Fragment = { __typename: 'YouTubeVideoBlock', videoID: string };

export type FullBlockFragment = FullBlock_BildwurfAdBlock_Fragment | FullBlock_EmbedBlock_Fragment | FullBlock_FacebookPostBlock_Fragment | FullBlock_FacebookVideoBlock_Fragment | FullBlock_ImageBlock_Fragment | FullBlock_ImageGalleryBlock_Fragment | FullBlock_InstagramPostBlock_Fragment | FullBlock_LinkPageBreakBlock_Fragment | FullBlock_ListicleBlock_Fragment | FullBlock_PolisConversationBlock_Fragment | FullBlock_QuoteBlock_Fragment | FullBlock_RichTextBlock_Fragment | FullBlock_SoundCloudTrackBlock_Fragment | FullBlock_TeaserGridBlock_Fragment | FullBlock_TeaserGridFlexBlock_Fragment | FullBlock_TikTokVideoBlock_Fragment | FullBlock_TitleBlock_Fragment | FullBlock_TwitterTweetBlock_Fragment | FullBlock_VimeoVideoBlock_Fragment | FullBlock_YouTubeVideoBlock_Fragment;

export type ImageUrLsFragment = { __typename?: 'Image', url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null };

export type ImageRefFragment = { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null };

export type FullImageFragment = { __typename?: 'Image', id: string, createdAt: string, modifiedAt: string, filename?: string | null, extension: string, width: number, height: number, fileSize: number, description?: string | null, tags: Array<string>, source?: string | null, link?: string | null, license?: string | null, title?: string | null, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null, focalPoint?: { __typename?: 'Point', x: number, y: number } | null };

export type ImageListQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['ID']>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type ImageListQuery = { __typename?: 'Query', images: { __typename?: 'ImageConnection', nodes: Array<{ __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } };

export type ImageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ImageQuery = { __typename?: 'Query', image?: { __typename?: 'Image', id: string, createdAt: string, modifiedAt: string, filename?: string | null, extension: string, width: number, height: number, fileSize: number, description?: string | null, tags: Array<string>, source?: string | null, link?: string | null, license?: string | null, title?: string | null, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null, focalPoint?: { __typename?: 'Point', x: number, y: number } | null } | null };

export type UploadImageMutationVariables = Exact<{
  input: UploadImageInput;
}>;


export type UploadImageMutation = { __typename?: 'Mutation', uploadImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null };

export type UpdateImageMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdateImageInput;
}>;


export type UpdateImageMutation = { __typename?: 'Mutation', updateImage?: { __typename?: 'Image', id: string, createdAt: string, modifiedAt: string, filename?: string | null, extension: string, width: number, height: number, fileSize: number, description?: string | null, tags: Array<string>, source?: string | null, link?: string | null, license?: string | null, title?: string | null, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null, focalPoint?: { __typename?: 'Point', x: number, y: number } | null } | null };

export type DeleteImageMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteImageMutation = { __typename?: 'Mutation', deleteImage?: { __typename?: 'Image', id: string, createdAt: string, modifiedAt: string, filename?: string | null, extension: string, width: number, height: number, fileSize: number, description?: string | null, tags: Array<string>, source?: string | null, link?: string | null, license?: string | null, title?: string | null, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null, focalPoint?: { __typename?: 'Point', x: number, y: number } | null } | null };

export type FullNavigationFragment = { __typename?: 'Navigation', id: string, key: string, name: string, links: Array<{ __typename: 'ArticleNavigationLink', label: string, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename: 'ExternalNavigationLink', label: string, url: string } | { __typename: 'PageNavigationLink', label: string, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null }> };

export type NavigationListQueryVariables = Exact<{ [key: string]: never; }>;


export type NavigationListQuery = { __typename?: 'Query', navigations: Array<{ __typename?: 'Navigation', id: string, key: string, name: string, links: Array<{ __typename: 'ArticleNavigationLink', label: string, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename: 'ExternalNavigationLink', label: string, url: string } | { __typename: 'PageNavigationLink', label: string, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null }> }> };

export type NavigationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type NavigationQuery = { __typename?: 'Query', navigation?: { __typename?: 'Navigation', id: string, key: string, name: string, links: Array<{ __typename: 'ArticleNavigationLink', label: string, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename: 'ExternalNavigationLink', label: string, url: string } | { __typename: 'PageNavigationLink', label: string, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null }> } | null };

export type CreateNavigationMutationVariables = Exact<{
  input: NavigationInput;
}>;


export type CreateNavigationMutation = { __typename?: 'Mutation', createNavigation?: { __typename?: 'Navigation', id: string, key: string, name: string, links: Array<{ __typename: 'ArticleNavigationLink', label: string, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename: 'ExternalNavigationLink', label: string, url: string } | { __typename: 'PageNavigationLink', label: string, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null }> } | null };

export type UpdateNavigationMutationVariables = Exact<{
  id: Scalars['ID'];
  input: NavigationInput;
}>;


export type UpdateNavigationMutation = { __typename?: 'Mutation', updateNavigation?: { __typename?: 'Navigation', id: string, key: string, name: string, links: Array<{ __typename: 'ArticleNavigationLink', label: string, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename: 'ExternalNavigationLink', label: string, url: string } | { __typename: 'PageNavigationLink', label: string, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null }> } | null };

export type DeleteNavigationMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteNavigationMutation = { __typename?: 'Mutation', deleteNavigation?: { __typename?: 'Navigation', id: string, key: string, name: string, links: Array<{ __typename: 'ArticleNavigationLink', label: string, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename: 'ExternalNavigationLink', label: string, url: string } | { __typename: 'PageNavigationLink', label: string, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null }> } | null };

export type MutationPageFragment = { __typename?: 'Page', id: string, draft?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'PageRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, slug: string, title: string, description?: string | null, tags: Array<string>, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }>, blocks: Array<{ __typename: 'BildwurfAdBlock' } | { __typename: 'EmbedBlock', url?: string | null, title?: string | null, width?: number | null, height?: number | null, styleCustom?: string | null, sandbox?: string | null } | { __typename: 'FacebookPostBlock', userID: string, postID: string } | { __typename: 'FacebookVideoBlock', userID: string, videoID: string } | { __typename: 'ImageBlock', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | { __typename: 'ImageGalleryBlock', images: Array<{ __typename?: 'GalleryImageEdge', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'InstagramPostBlock', postID: string } | { __typename: 'LinkPageBreakBlock', text?: string | null, linkText?: string | null, linkURL?: string | null } | { __typename: 'ListicleBlock', items: Array<{ __typename?: 'ListicleItem', title: string, richText: Node[], image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'PolisConversationBlock' } | { __typename: 'QuoteBlock', quote?: string | null, author?: string | null } | { __typename: 'RichTextBlock', richText: Node[] } | { __typename: 'SoundCloudTrackBlock', trackID: string } | { __typename: 'TeaserGridBlock', numColumns: number, teasers: Array<{ __typename?: 'ArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PageTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PeerArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, articleID: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, peer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | null> } | { __typename: 'TeaserGridFlexBlock' } | { __typename: 'TikTokVideoBlock' } | { __typename: 'TitleBlock', title?: string | null, lead?: string | null } | { __typename: 'TwitterTweetBlock', userID: string, tweetID: string } | { __typename: 'VimeoVideoBlock', videoID: string } | { __typename: 'YouTubeVideoBlock', videoID: string }> } };

export type PageRefFragment = { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } };

export type PageListQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['ID']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type PageListQuery = { __typename?: 'Query', pages: { __typename?: 'PageConnection', totalCount: number, nodes: Array<{ __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } };

export type CreatePageMutationVariables = Exact<{
  input: PageInput;
}>;


export type CreatePageMutation = { __typename?: 'Mutation', createPage: { __typename?: 'Page', id: string, draft?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'PageRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, slug: string, title: string, description?: string | null, tags: Array<string>, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }>, blocks: Array<{ __typename: 'BildwurfAdBlock' } | { __typename: 'EmbedBlock', url?: string | null, title?: string | null, width?: number | null, height?: number | null, styleCustom?: string | null, sandbox?: string | null } | { __typename: 'FacebookPostBlock', userID: string, postID: string } | { __typename: 'FacebookVideoBlock', userID: string, videoID: string } | { __typename: 'ImageBlock', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | { __typename: 'ImageGalleryBlock', images: Array<{ __typename?: 'GalleryImageEdge', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'InstagramPostBlock', postID: string } | { __typename: 'LinkPageBreakBlock', text?: string | null, linkText?: string | null, linkURL?: string | null } | { __typename: 'ListicleBlock', items: Array<{ __typename?: 'ListicleItem', title: string, richText: Node[], image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'PolisConversationBlock' } | { __typename: 'QuoteBlock', quote?: string | null, author?: string | null } | { __typename: 'RichTextBlock', richText: Node[] } | { __typename: 'SoundCloudTrackBlock', trackID: string } | { __typename: 'TeaserGridBlock', numColumns: number, teasers: Array<{ __typename?: 'ArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PageTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PeerArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, articleID: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, peer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | null> } | { __typename: 'TeaserGridFlexBlock' } | { __typename: 'TikTokVideoBlock' } | { __typename: 'TitleBlock', title?: string | null, lead?: string | null } | { __typename: 'TwitterTweetBlock', userID: string, tweetID: string } | { __typename: 'VimeoVideoBlock', videoID: string } | { __typename: 'YouTubeVideoBlock', videoID: string }> } } };

export type UpdatePageMutationVariables = Exact<{
  id: Scalars['ID'];
  input: PageInput;
}>;


export type UpdatePageMutation = { __typename?: 'Mutation', updatePage?: { __typename?: 'Page', id: string, draft?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'PageRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, slug: string, title: string, description?: string | null, tags: Array<string>, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }>, blocks: Array<{ __typename: 'BildwurfAdBlock' } | { __typename: 'EmbedBlock', url?: string | null, title?: string | null, width?: number | null, height?: number | null, styleCustom?: string | null, sandbox?: string | null } | { __typename: 'FacebookPostBlock', userID: string, postID: string } | { __typename: 'FacebookVideoBlock', userID: string, videoID: string } | { __typename: 'ImageBlock', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | { __typename: 'ImageGalleryBlock', images: Array<{ __typename?: 'GalleryImageEdge', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'InstagramPostBlock', postID: string } | { __typename: 'LinkPageBreakBlock', text?: string | null, linkText?: string | null, linkURL?: string | null } | { __typename: 'ListicleBlock', items: Array<{ __typename?: 'ListicleItem', title: string, richText: Node[], image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'PolisConversationBlock' } | { __typename: 'QuoteBlock', quote?: string | null, author?: string | null } | { __typename: 'RichTextBlock', richText: Node[] } | { __typename: 'SoundCloudTrackBlock', trackID: string } | { __typename: 'TeaserGridBlock', numColumns: number, teasers: Array<{ __typename?: 'ArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PageTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PeerArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, articleID: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, peer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | null> } | { __typename: 'TeaserGridFlexBlock' } | { __typename: 'TikTokVideoBlock' } | { __typename: 'TitleBlock', title?: string | null, lead?: string | null } | { __typename: 'TwitterTweetBlock', userID: string, tweetID: string } | { __typename: 'VimeoVideoBlock', videoID: string } | { __typename: 'YouTubeVideoBlock', videoID: string }> } } | null };

export type PublishPageMutationVariables = Exact<{
  id: Scalars['ID'];
  publishAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
}>;


export type PublishPageMutation = { __typename?: 'Mutation', publishPage?: { __typename?: 'Page', id: string, draft?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'PageRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, slug: string, title: string, description?: string | null, tags: Array<string>, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }>, blocks: Array<{ __typename: 'BildwurfAdBlock' } | { __typename: 'EmbedBlock', url?: string | null, title?: string | null, width?: number | null, height?: number | null, styleCustom?: string | null, sandbox?: string | null } | { __typename: 'FacebookPostBlock', userID: string, postID: string } | { __typename: 'FacebookVideoBlock', userID: string, videoID: string } | { __typename: 'ImageBlock', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | { __typename: 'ImageGalleryBlock', images: Array<{ __typename?: 'GalleryImageEdge', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'InstagramPostBlock', postID: string } | { __typename: 'LinkPageBreakBlock', text?: string | null, linkText?: string | null, linkURL?: string | null } | { __typename: 'ListicleBlock', items: Array<{ __typename?: 'ListicleItem', title: string, richText: Node[], image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'PolisConversationBlock' } | { __typename: 'QuoteBlock', quote?: string | null, author?: string | null } | { __typename: 'RichTextBlock', richText: Node[] } | { __typename: 'SoundCloudTrackBlock', trackID: string } | { __typename: 'TeaserGridBlock', numColumns: number, teasers: Array<{ __typename?: 'ArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PageTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PeerArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, articleID: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, peer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | null> } | { __typename: 'TeaserGridFlexBlock' } | { __typename: 'TikTokVideoBlock' } | { __typename: 'TitleBlock', title?: string | null, lead?: string | null } | { __typename: 'TwitterTweetBlock', userID: string, tweetID: string } | { __typename: 'VimeoVideoBlock', videoID: string } | { __typename: 'YouTubeVideoBlock', videoID: string }> } } | null };

export type UnpublishPageMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UnpublishPageMutation = { __typename?: 'Mutation', unpublishPage?: { __typename?: 'Page', id: string, draft?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'PageRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, slug: string, title: string, description?: string | null, tags: Array<string>, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }>, blocks: Array<{ __typename: 'BildwurfAdBlock' } | { __typename: 'EmbedBlock', url?: string | null, title?: string | null, width?: number | null, height?: number | null, styleCustom?: string | null, sandbox?: string | null } | { __typename: 'FacebookPostBlock', userID: string, postID: string } | { __typename: 'FacebookVideoBlock', userID: string, videoID: string } | { __typename: 'ImageBlock', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | { __typename: 'ImageGalleryBlock', images: Array<{ __typename?: 'GalleryImageEdge', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'InstagramPostBlock', postID: string } | { __typename: 'LinkPageBreakBlock', text?: string | null, linkText?: string | null, linkURL?: string | null } | { __typename: 'ListicleBlock', items: Array<{ __typename?: 'ListicleItem', title: string, richText: Node[], image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'PolisConversationBlock' } | { __typename: 'QuoteBlock', quote?: string | null, author?: string | null } | { __typename: 'RichTextBlock', richText: Node[] } | { __typename: 'SoundCloudTrackBlock', trackID: string } | { __typename: 'TeaserGridBlock', numColumns: number, teasers: Array<{ __typename?: 'ArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PageTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PeerArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, articleID: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, peer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | null> } | { __typename: 'TeaserGridFlexBlock' } | { __typename: 'TikTokVideoBlock' } | { __typename: 'TitleBlock', title?: string | null, lead?: string | null } | { __typename: 'TwitterTweetBlock', userID: string, tweetID: string } | { __typename: 'VimeoVideoBlock', videoID: string } | { __typename: 'YouTubeVideoBlock', videoID: string }> } } | null };

export type DeletePageMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePageMutation = { __typename?: 'Mutation', deletePage?: { __typename?: 'Page', id: string, draft?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, pending?: { __typename?: 'PageRevision', publishAt?: string | null, revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, slug: string, title: string, description?: string | null, tags: Array<string>, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }>, blocks: Array<{ __typename: 'BildwurfAdBlock' } | { __typename: 'EmbedBlock', url?: string | null, title?: string | null, width?: number | null, height?: number | null, styleCustom?: string | null, sandbox?: string | null } | { __typename: 'FacebookPostBlock', userID: string, postID: string } | { __typename: 'FacebookVideoBlock', userID: string, videoID: string } | { __typename: 'ImageBlock', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | { __typename: 'ImageGalleryBlock', images: Array<{ __typename?: 'GalleryImageEdge', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'InstagramPostBlock', postID: string } | { __typename: 'LinkPageBreakBlock', text?: string | null, linkText?: string | null, linkURL?: string | null } | { __typename: 'ListicleBlock', items: Array<{ __typename?: 'ListicleItem', title: string, richText: Node[], image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'PolisConversationBlock' } | { __typename: 'QuoteBlock', quote?: string | null, author?: string | null } | { __typename: 'RichTextBlock', richText: Node[] } | { __typename: 'SoundCloudTrackBlock', trackID: string } | { __typename: 'TeaserGridBlock', numColumns: number, teasers: Array<{ __typename?: 'ArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PageTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PeerArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, articleID: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, peer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | null> } | { __typename: 'TeaserGridFlexBlock' } | { __typename: 'TikTokVideoBlock' } | { __typename: 'TitleBlock', title?: string | null, lead?: string | null } | { __typename: 'TwitterTweetBlock', userID: string, tweetID: string } | { __typename: 'VimeoVideoBlock', videoID: string } | { __typename: 'YouTubeVideoBlock', videoID: string }> } } | null };

export type PageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename?: 'Page', id: string, pending?: { __typename?: 'PageRevision', publishAt?: string | null } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, slug: string, title: string, description?: string | null, tags: Array<string>, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, properties: Array<{ __typename?: 'Properties', key: string, value: string, public: boolean }>, blocks: Array<{ __typename: 'BildwurfAdBlock' } | { __typename: 'EmbedBlock', url?: string | null, title?: string | null, width?: number | null, height?: number | null, styleCustom?: string | null, sandbox?: string | null } | { __typename: 'FacebookPostBlock', userID: string, postID: string } | { __typename: 'FacebookVideoBlock', userID: string, videoID: string } | { __typename: 'ImageBlock', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | { __typename: 'ImageGalleryBlock', images: Array<{ __typename?: 'GalleryImageEdge', caption?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'InstagramPostBlock', postID: string } | { __typename: 'LinkPageBreakBlock', text?: string | null, linkText?: string | null, linkURL?: string | null } | { __typename: 'ListicleBlock', items: Array<{ __typename?: 'ListicleItem', title: string, richText: Node[], image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null }> } | { __typename: 'PolisConversationBlock' } | { __typename: 'QuoteBlock', quote?: string | null, author?: string | null } | { __typename: 'RichTextBlock', richText: Node[] } | { __typename: 'SoundCloudTrackBlock', trackID: string } | { __typename: 'TeaserGridBlock', numColumns: number, teasers: Array<{ __typename?: 'ArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PageTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, page?: { __typename?: 'Page', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'PageRevision', revision: number } | null, pending?: { __typename?: 'PageRevision', revision: number } | null, published?: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'PageRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, title: string, description?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | { __typename?: 'PeerArticleTeaser', style: TeaserStyle, preTitle?: string | null, title?: string | null, lead?: string | null, articleID: string, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, peer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null } | null, article?: { __typename?: 'Article', id: string, createdAt: string, modifiedAt: string, draft?: { __typename?: 'ArticleRevision', revision: number } | null, pending?: { __typename?: 'ArticleRevision', revision: number } | null, published?: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number } | null, latest: { __typename?: 'ArticleRevision', publishedAt?: string | null, updatedAt?: string | null, revision: number, preTitle?: string | null, title?: string | null, lead?: string | null, image?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } } | null } | null> } | { __typename: 'TeaserGridFlexBlock' } | { __typename: 'TikTokVideoBlock' } | { __typename: 'TitleBlock', title?: string | null, lead?: string | null } | { __typename: 'TwitterTweetBlock', userID: string, tweetID: string } | { __typename: 'VimeoVideoBlock', videoID: string } | { __typename: 'YouTubeVideoBlock', videoID: string }> } } | null };

export type FullPeerProfileFragment = { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null };

export type PeerRefFragment = { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string };

export type PeerWithProfileFragment = { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string, profile?: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } | null };

export type PeerProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type PeerProfileQuery = { __typename?: 'Query', peerProfile: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } };

export type UpdatePeerProfileMutationVariables = Exact<{
  input: PeerProfileInput;
}>;


export type UpdatePeerProfileMutation = { __typename?: 'Mutation', updatePeerProfile: { __typename?: 'PeerProfile', name: string, hostURL: string, themeColor: string, themeFontColor: string, callToActionText: Node[], callToActionURL: string, callToActionImageURL?: string | null, logo?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null, callToActionImage?: { __typename?: 'Image', id: string, filename?: string | null, extension: string, title?: string | null, description?: string | null, width: number, height: number, url?: string | null, largeURL?: string | null, mediumURL?: string | null, thumbURL?: string | null, squareURL?: string | null, previewURL?: string | null, column1URL?: string | null, column6URL?: string | null } | null } };

export type PeerListQueryVariables = Exact<{ [key: string]: never; }>;


export type PeerListQuery = { __typename?: 'Query', peers?: Array<{ __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string }> | null };

export type PeerQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PeerQuery = { __typename?: 'Query', peer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string } | null };

export type CreatePeerMutationVariables = Exact<{
  input: CreatePeerInput;
}>;


export type CreatePeerMutation = { __typename?: 'Mutation', createPeer: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string } };

export type UpdatePeerMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UpdatePeerInput;
}>;


export type UpdatePeerMutation = { __typename?: 'Mutation', updatePeer: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string } };

export type DeletePeerMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeletePeerMutation = { __typename?: 'Mutation', deletePeer?: { __typename?: 'Peer', id: string, name: string, isDisabled?: boolean | null, slug: string, hostURL: string } | null };

export type FullUserFragment = { __typename?: 'User', id: string, name: string, email: string, emailVerifiedAt?: string | null, roles: Array<{ __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> }> };

export type UserListQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['ID']>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type UserListQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', totalCount: number, nodes: Array<{ __typename?: 'User', id: string, name: string, email: string, emailVerifiedAt?: string | null, roles: Array<{ __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> }> }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, email: string, emailVerifiedAt?: string | null, roles: Array<{ __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> }> } | null };

export type UserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, name: string, email: string, emailVerifiedAt?: string | null, roles: Array<{ __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> }> } | null };

export type CreateUserMutationVariables = Exact<{
  input: UserInput;
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, name: string, email: string, emailVerifiedAt?: string | null, roles: Array<{ __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> }> } | null };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, name: string, email: string, emailVerifiedAt?: string | null, roles: Array<{ __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> }> } | null };

export type ResetUserPasswordMutationVariables = Exact<{
  id: Scalars['ID'];
  password: Scalars['String'];
}>;


export type ResetUserPasswordMutation = { __typename?: 'Mutation', resetUserPassword?: { __typename?: 'User', id: string, name: string, email: string, emailVerifiedAt?: string | null, roles: Array<{ __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> }> } | null };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', id: string, name: string, email: string, emailVerifiedAt?: string | null, roles: Array<{ __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> }> } | null };

export type CreateSessionMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateSessionMutation = { __typename?: 'Mutation', createSession: { __typename?: 'SessionWithToken', token: string, user: { __typename?: 'User', email: string } } };

export type CreateSessionWithJwtMutationVariables = Exact<{
  jwt: Scalars['String'];
}>;


export type CreateSessionWithJwtMutation = { __typename?: 'Mutation', createSessionWithJWT: { __typename?: 'SessionWithToken', token: string, user: { __typename?: 'User', email: string } } };

export type FullPermissionFragment = { __typename?: 'Permission', id: string, description: string, deprecated: boolean };

export type FullUserRoleFragment = { __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> };

export type UserRoleListQueryVariables = Exact<{
  filter?: InputMaybe<Scalars['String']>;
  cursor?: InputMaybe<Scalars['ID']>;
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type UserRoleListQuery = { __typename?: 'Query', userRoles: { __typename?: 'UserRoleConnection', totalCount: number, nodes: Array<{ __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean } } };

export type PermissionListQueryVariables = Exact<{ [key: string]: never; }>;


export type PermissionListQuery = { __typename?: 'Query', permissions?: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> | null };

export type UserRoleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserRoleQuery = { __typename?: 'Query', userRole?: { __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> } | null };

export type CreateUserRoleMutationVariables = Exact<{
  input: UserRoleInput;
}>;


export type CreateUserRoleMutation = { __typename?: 'Mutation', createUserRole?: { __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> } | null };

export type UpdateUserRoleMutationVariables = Exact<{
  id: Scalars['ID'];
  input: UserRoleInput;
}>;


export type UpdateUserRoleMutation = { __typename?: 'Mutation', updateUserRole?: { __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> } | null };

export type DeleteUserRoleMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteUserRoleMutation = { __typename?: 'Mutation', deleteUserRole?: { __typename?: 'UserRole', id: string, name: string, description?: string | null, systemRole: boolean, permissions: Array<{ __typename?: 'Permission', id: string, description: string, deprecated: boolean }> } | null };

export const MutationArticle = gql`
    fragment MutationArticle on Article {
  id
  shared
  draft {
    publishedAt
    updatedAt
    revision
  }
  pending {
    publishAt
    revision
  }
  published {
    publishedAt
    updatedAt
    revision
  }
  latest {
    publishedAt
    updatedAt
    revision
    title
    preTitle
    lead
    slug
    breaking
    tags
    properties {
      key
      value
      public
    }
  }
}
    `;
export const ImageUrLs = gql`
    fragment ImageURLs on Image {
  url
  largeURL: transformURL(input: {width: 500})
  mediumURL: transformURL(input: {width: 300})
  thumbURL: transformURL(input: {width: 280, height: 200})
  squareURL: transformURL(input: {width: 100, height: 100})
  previewURL: transformURL(input: {width: 400, height: 200})
  column1URL: transformURL(input: {width: 800, height: 300})
  column6URL: transformURL(input: {width: 260, height: 300})
}
    `;
export const ImageRef = gql`
    fragment ImageRef on Image {
  id
  filename
  extension
  title
  description
  width
  height
  ...ImageURLs
}
    ${ImageUrLs}`;
export const AuthorRef = gql`
    fragment AuthorRef on Author {
  id
  name
  image {
    ...ImageRef
  }
}
    ${ImageRef}`;
export const FullAuthor = gql`
    fragment FullAuthor on Author {
  slug
  links {
    title
    url
  }
  bio
  ...AuthorRef
}
    ${AuthorRef}`;
export const FullImage = gql`
    fragment FullImage on Image {
  id
  createdAt
  modifiedAt
  filename
  extension
  width
  height
  fileSize
  description
  tags
  source
  link
  license
  focalPoint {
    x
    y
  }
  ...ImageRef
}
    ${ImageRef}`;
export const PageRef = gql`
    fragment PageRef on Page {
  id
  createdAt
  modifiedAt
  draft {
    revision
  }
  pending {
    revision
  }
  published {
    publishedAt
    updatedAt
    revision
  }
  latest {
    publishedAt
    updatedAt
    revision
    title
    description
    image {
      ...ImageRef
    }
  }
}
    ${ImageRef}`;
export const ArticleRef = gql`
    fragment ArticleRef on Article {
  id
  createdAt
  modifiedAt
  draft {
    revision
  }
  pending {
    revision
  }
  published {
    publishedAt
    updatedAt
    revision
  }
  latest {
    publishedAt
    updatedAt
    revision
    preTitle
    title
    lead
    image {
      ...ImageRef
    }
  }
}
    ${ImageRef}`;
export const FullNavigation = gql`
    fragment FullNavigation on Navigation {
  id
  key
  name
  links {
    __typename
    ... on PageNavigationLink {
      label
      page {
        ...PageRef
      }
    }
    ... on ArticleNavigationLink {
      label
      article {
        ...ArticleRef
      }
    }
    ... on ExternalNavigationLink {
      label
      url
    }
  }
}
    ${PageRef}
${ArticleRef}`;
export const PeerRef = gql`
    fragment PeerRef on Peer {
  id
  name
  isDisabled
  slug
  hostURL
}
    `;
export const FullPeerProfile = gql`
    fragment FullPeerProfile on PeerProfile {
  name
  hostURL
  themeColor
  themeFontColor
  logo {
    ...ImageRef
  }
  callToActionText
  callToActionURL
  callToActionImage {
    ...ImageRef
  }
  callToActionImageURL
}
    ${ImageRef}`;
export const PeerWithProfile = gql`
    fragment PeerWithProfile on Peer {
  ...PeerRef
  profile {
    ...FullPeerProfile
  }
}
    ${PeerRef}
${FullPeerProfile}`;
export const FullTeaser = gql`
    fragment FullTeaser on Teaser {
  ... on ArticleTeaser {
    style
    image {
      ...ImageRef
    }
    preTitle
    title
    lead
    article {
      ...ArticleRef
    }
  }
  ... on PeerArticleTeaser {
    style
    image {
      ...ImageRef
    }
    preTitle
    title
    lead
    peer {
      ...PeerWithProfile
    }
    articleID
    article {
      ...ArticleRef
    }
  }
  ... on PageTeaser {
    style
    image {
      ...ImageRef
    }
    preTitle
    title
    lead
    page {
      ...PageRef
    }
  }
}
    ${ImageRef}
${ArticleRef}
${PeerWithProfile}
${PageRef}`;
export const FullBlock = gql`
    fragment FullBlock on Block {
  __typename
  ... on TitleBlock {
    title
    lead
  }
  ... on RichTextBlock {
    richText
  }
  ... on QuoteBlock {
    quote
    author
  }
  ... on LinkPageBreakBlock {
    text
    linkText
    linkURL
  }
  ... on ImageBlock {
    caption
    image {
      ...ImageRef
    }
  }
  ... on ImageGalleryBlock {
    images {
      caption
      image {
        ...ImageRef
      }
    }
  }
  ... on ListicleBlock {
    items {
      title
      image {
        ...ImageRef
      }
      richText
    }
  }
  ... on FacebookPostBlock {
    userID
    postID
  }
  ... on FacebookVideoBlock {
    userID
    videoID
  }
  ... on InstagramPostBlock {
    postID
  }
  ... on TwitterTweetBlock {
    userID
    tweetID
  }
  ... on VimeoVideoBlock {
    videoID
  }
  ... on YouTubeVideoBlock {
    videoID
  }
  ... on SoundCloudTrackBlock {
    trackID
  }
  ... on EmbedBlock {
    url
    title
    width
    height
    styleCustom
    sandbox
  }
  ... on TeaserGridBlock {
    teasers {
      ...FullTeaser
    }
    numColumns
  }
}
    ${ImageRef}
${FullTeaser}`;
export const MutationPage = gql`
    fragment MutationPage on Page {
  id
  draft {
    publishedAt
    updatedAt
    revision
  }
  pending {
    publishAt
    revision
  }
  published {
    publishedAt
    updatedAt
    revision
  }
  latest {
    publishedAt
    updatedAt
    slug
    title
    description
    image {
      ...ImageRef
    }
    tags
    properties {
      key
      value
      public
    }
    blocks {
      ...FullBlock
    }
  }
}
    ${ImageRef}
${FullBlock}`;
export const FullPermission = gql`
    fragment FullPermission on Permission {
  id
  description
  deprecated
}
    `;
export const FullUserRole = gql`
    fragment FullUserRole on UserRole {
  id
  name
  description
  systemRole
  permissions {
    ...FullPermission
  }
}
    ${FullPermission}`;
export const FullUser = gql`
    fragment FullUser on User {
  id
  name
  email
  emailVerifiedAt
  roles {
    ...FullUserRole
  }
}
    ${FullUserRole}`;
export const ArticleList = gql`
    query ArticleList($filter: String, $cursor: ID, $take: Int) {
  articles(take: $take, cursor: $cursor, filter: {title: $filter}) {
    nodes {
      ...ArticleRef
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
    ${ArticleRef}`;
export const PeerArticleList = gql`
    query PeerArticleList($filter: String, $cursors: String, $take: Int) {
  peerArticles(take: $take, cursors: $cursors, filter: {title: $filter}) {
    nodes {
      peer {
        ...PeerWithProfile
      }
      article {
        ...ArticleRef
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
    totalCount
  }
}
    ${PeerWithProfile}
${ArticleRef}`;
export const CreateArticle = gql`
    mutation CreateArticle($input: ArticleInput!) {
  createArticle(input: $input) {
    ...MutationArticle
  }
}
    ${MutationArticle}`;
export const UpdateArticle = gql`
    mutation UpdateArticle($id: ID!, $input: ArticleInput!) {
  updateArticle(id: $id, input: $input) {
    ...MutationArticle
  }
}
    ${MutationArticle}`;
export const PublishArticle = gql`
    mutation PublishArticle($id: ID!, $publishAt: DateTime!, $publishedAt: DateTime!, $updatedAt: DateTime!) {
  publishArticle(
    id: $id
    publishAt: $publishAt
    publishedAt: $publishedAt
    updatedAt: $updatedAt
  ) {
    ...MutationArticle
  }
}
    ${MutationArticle}`;
export const UnpublishArticle = gql`
    mutation UnpublishArticle($id: ID!) {
  unpublishArticle(id: $id) {
    ...MutationArticle
  }
}
    ${MutationArticle}`;
export const DeleteArticle = gql`
    mutation DeleteArticle($id: ID!) {
  deleteArticle(id: $id) {
    ...MutationArticle
  }
}
    ${MutationArticle}`;
export const Article = gql`
    query Article($id: ID!) {
  article(id: $id) {
    id
    shared
    pending {
      publishAt
    }
    published {
      publishedAt
      updatedAt
    }
    latest {
      publishedAt
      updatedAt
      revision
      slug
      preTitle
      title
      lead
      image {
        ...ImageRef
      }
      tags
      properties {
        key
        value
        public
      }
      authors {
        ...AuthorRef
      }
      hideAuthor
      breaking
      socialMediaTitle
      socialMediaDescription
      socialMediaAuthors {
        ...AuthorRef
      }
      socialMediaImage {
        ...ImageRef
      }
      blocks {
        ...FullBlock
      }
    }
  }
}
    ${ImageRef}
${AuthorRef}
${FullBlock}`;
export const AuthorList = gql`
    query AuthorList($filter: String, $cursor: ID, $take: Int, $skip: Int) {
  authors(filter: {name: $filter}, cursor: $cursor, take: $take, skip: $skip) {
    nodes {
      ...FullAuthor
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
    ${FullAuthor}`;
export const Author = gql`
    query Author($id: ID!) {
  author(id: $id) {
    ...FullAuthor
  }
}
    ${FullAuthor}`;
export const CreateAuthor = gql`
    mutation CreateAuthor($input: AuthorInput!) {
  createAuthor(input: $input) {
    ...FullAuthor
  }
}
    ${FullAuthor}`;
export const UpdateAuthor = gql`
    mutation UpdateAuthor($id: ID!, $input: AuthorInput!) {
  updateAuthor(id: $id, input: $input) {
    ...FullAuthor
  }
}
    ${FullAuthor}`;
export const DeleteAuthor = gql`
    mutation DeleteAuthor($id: ID!) {
  deleteAuthor(id: $id) {
    ...FullAuthor
  }
}
    ${FullAuthor}`;
export const ImageList = gql`
    query ImageList($filter: String, $cursor: ID, $take: Int, $skip: Int) {
  images(filter: {title: $filter}, cursor: $cursor, take: $take, skip: $skip) {
    nodes {
      ...ImageRef
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
    ${ImageRef}`;
export const Image = gql`
    query Image($id: ID!) {
  image(id: $id) {
    ...FullImage
  }
}
    ${FullImage}`;
export const UploadImage = gql`
    mutation UploadImage($input: UploadImageInput!) {
  uploadImage(input: $input) {
    ...ImageRef
  }
}
    ${ImageRef}`;
export const UpdateImage = gql`
    mutation UpdateImage($id: ID!, $input: UpdateImageInput!) {
  updateImage(id: $id, input: $input) {
    ...FullImage
  }
}
    ${FullImage}`;
export const DeleteImage = gql`
    mutation DeleteImage($id: ID!) {
  deleteImage(id: $id) {
    ...FullImage
  }
}
    ${FullImage}`;
export const NavigationList = gql`
    query NavigationList {
  navigations {
    ...FullNavigation
  }
}
    ${FullNavigation}`;
export const Navigation = gql`
    query Navigation($id: ID!) {
  navigation(id: $id) {
    ...FullNavigation
  }
}
    ${FullNavigation}`;
export const CreateNavigation = gql`
    mutation CreateNavigation($input: NavigationInput!) {
  createNavigation(input: $input) {
    ...FullNavigation
  }
}
    ${FullNavigation}`;
export const UpdateNavigation = gql`
    mutation UpdateNavigation($id: ID!, $input: NavigationInput!) {
  updateNavigation(id: $id, input: $input) {
    ...FullNavigation
  }
}
    ${FullNavigation}`;
export const DeleteNavigation = gql`
    mutation DeleteNavigation($id: ID!) {
  deleteNavigation(id: $id) {
    ...FullNavigation
  }
}
    ${FullNavigation}`;
export const PageList = gql`
    query PageList($filter: String, $cursor: ID, $take: Int) {
  pages(take: $take, cursor: $cursor, filter: {title: $filter}) {
    nodes {
      ...PageRef
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
    ${PageRef}`;
export const CreatePage = gql`
    mutation CreatePage($input: PageInput!) {
  createPage(input: $input) {
    ...MutationPage
  }
}
    ${MutationPage}`;
export const UpdatePage = gql`
    mutation UpdatePage($id: ID!, $input: PageInput!) {
  updatePage(id: $id, input: $input) {
    ...MutationPage
  }
}
    ${MutationPage}`;
export const PublishPage = gql`
    mutation PublishPage($id: ID!, $publishAt: DateTime, $publishedAt: DateTime, $updatedAt: DateTime) {
  publishPage(
    id: $id
    publishAt: $publishAt
    publishedAt: $publishedAt
    updatedAt: $updatedAt
  ) {
    ...MutationPage
  }
}
    ${MutationPage}`;
export const UnpublishPage = gql`
    mutation UnpublishPage($id: ID!) {
  unpublishPage(id: $id) {
    ...MutationPage
  }
}
    ${MutationPage}`;
export const DeletePage = gql`
    mutation DeletePage($id: ID!) {
  deletePage(id: $id) {
    ...MutationPage
  }
}
    ${MutationPage}`;
export const Page = gql`
    query Page($id: ID!) {
  page(id: $id) {
    id
    pending {
      publishAt
    }
    published {
      publishedAt
      updatedAt
    }
    latest {
      publishedAt
      updatedAt
      slug
      title
      description
      image {
        ...ImageRef
      }
      tags
      properties {
        key
        value
        public
      }
      blocks {
        ...FullBlock
      }
    }
  }
}
    ${ImageRef}
${FullBlock}`;
export const PeerProfile = gql`
    query PeerProfile {
  peerProfile {
    ...FullPeerProfile
  }
}
    ${FullPeerProfile}`;
export const UpdatePeerProfile = gql`
    mutation UpdatePeerProfile($input: PeerProfileInput!) {
  updatePeerProfile(input: $input) {
    ...FullPeerProfile
  }
}
    ${FullPeerProfile}`;
export const PeerList = gql`
    query PeerList {
  peers {
    ...PeerRef
  }
}
    ${PeerRef}`;
export const Peer = gql`
    query Peer($id: ID!) {
  peer(id: $id) {
    ...PeerRef
  }
}
    ${PeerRef}`;
export const CreatePeer = gql`
    mutation CreatePeer($input: CreatePeerInput!) {
  createPeer(input: $input) {
    ...PeerRef
  }
}
    ${PeerRef}`;
export const UpdatePeer = gql`
    mutation UpdatePeer($id: ID!, $input: UpdatePeerInput!) {
  updatePeer(id: $id, input: $input) {
    ...PeerRef
  }
}
    ${PeerRef}`;
export const DeletePeer = gql`
    mutation DeletePeer($id: ID!) {
  deletePeer(id: $id) {
    ...PeerRef
  }
}
    ${PeerRef}`;
export const UserList = gql`
    query UserList($filter: String, $cursor: ID, $take: Int, $skip: Int) {
  users(filter: {name: $filter}, cursor: $cursor, take: $take, skip: $skip) {
    nodes {
      ...FullUser
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
    ${FullUser}`;
export const Me = gql`
    query Me {
  me {
    ...FullUser
  }
}
    ${FullUser}`;
export const User = gql`
    query User($id: ID!) {
  user(id: $id) {
    ...FullUser
  }
}
    ${FullUser}`;
export const CreateUser = gql`
    mutation CreateUser($input: UserInput!, $password: String!) {
  createUser(input: $input, password: $password) {
    ...FullUser
  }
}
    ${FullUser}`;
export const UpdateUser = gql`
    mutation UpdateUser($id: ID!, $input: UserInput!) {
  updateUser(id: $id, input: $input) {
    ...FullUser
  }
}
    ${FullUser}`;
export const ResetUserPassword = gql`
    mutation ResetUserPassword($id: ID!, $password: String!) {
  resetUserPassword(id: $id, password: $password) {
    ...FullUser
  }
}
    ${FullUser}`;
export const DeleteUser = gql`
    mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    ...FullUser
  }
}
    ${FullUser}`;
export const CreateSession = gql`
    mutation CreateSession($email: String!, $password: String!) {
  createSession(email: $email, password: $password) {
    user {
      email
    }
    token
  }
}
    `;
export const CreateSessionWithJwt = gql`
    mutation CreateSessionWithJWT($jwt: String!) {
  createSessionWithJWT(jwt: $jwt) {
    user {
      email
    }
    token
  }
}
    `;
export const UserRoleList = gql`
    query UserRoleList($filter: String, $cursor: ID, $take: Int, $skip: Int) {
  userRoles(filter: {name: $filter}, cursor: $cursor, take: $take, skip: $skip) {
    nodes {
      ...FullUserRole
    }
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
    ${FullUserRole}`;
export const PermissionList = gql`
    query PermissionList {
  permissions {
    ...FullPermission
  }
}
    ${FullPermission}`;
export const UserRole = gql`
    query UserRole($id: ID!) {
  userRole(id: $id) {
    ...FullUserRole
  }
}
    ${FullUserRole}`;
export const CreateUserRole = gql`
    mutation CreateUserRole($input: UserRoleInput!) {
  createUserRole(input: $input) {
    ...FullUserRole
  }
}
    ${FullUserRole}`;
export const UpdateUserRole = gql`
    mutation UpdateUserRole($id: ID!, $input: UserRoleInput!) {
  updateUserRole(id: $id, input: $input) {
    ...FullUserRole
  }
}
    ${FullUserRole}`;
export const DeleteUserRole = gql`
    mutation DeleteUserRole($id: ID!) {
  deleteUserRole(id: $id) {
    ...FullUserRole
  }
}
    ${FullUserRole}`;
