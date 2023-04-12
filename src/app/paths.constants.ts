export enum PATHS {
  login = 'login',
  signup = 'signup',

  dashboard = 'dashboard',


  // = = = = = = = Angular = = = = = = =

  // LIFECYCLE HOOKS
  introductionLifecycleHooks = 'introduction',
  onChanges = 'on-changes',
  onInit = 'on-init',
  doCheck = 'do-check',
  afterContentInit = 'after-content-init',
  afterContentChecked = 'after-content-checked',
  afterViewInit = 'after-view-init',
  afterViewChecked = 'after-view-checked',
  onDestroy = 'on-destroy',

  // DECORATORS
  introductionDecorators = 'introduction',
  inputDecorators = 'input',
  outputDecorators = 'output',
  viewChildDecorators = 'viewChild',
  viewChildrenDecorators = 'viewChildren',
  contentChildDecorators = 'contentChild',
  contentChildrenDecorators = 'contentChildren',
  hostBindingDecorators = 'hostBinding',
  hostListenerDecorators = 'hostListener',

  // DIRECTIVES BUILT-IN
  introductionBuiltInDirectives = 'introduction',
  attributeDirectives = 'attributeDirectives',
  structuralDirectives = 'structuralDirectives',

  // DIRECTIVES CUSTOM
  introductionCustomDirectives = 'introduction',
  colorCustomDirectives = 'colorDirectives',

  // FORMS
  forms = 'forms',
  reactive = 'reactive-forms',
  template = 'template-driven-forms',

  // TABLES
  matTable = 'mat-table',
  trackBy = 'track-by',

  // NgRX
  ngrx = 'ngrx',
  beginner = 'beginner',

  notfound = '404',


  // = = = = = = = RxJS = = = = = = =

  // ASYNCHRONY
  introductionAsynchrony = 'introduction',
  promises = 'promises',
  observables = 'observables',

  // CATEGORY OF OPERATORS
  creationOperators = 'creation-operators',
  joinCreationOperators = 'join-creation-operators',
  transformationOperators = 'transformation-operators',
  filteringOperators = 'filtering-operators',

  // Creation Operators
  defer = 'defer',
  empty = 'empty',
  from = 'from',
  fromEvent = 'fromEvent',
  of = 'of',

  // Join Creation Operators
  introductionJoinCreationOperators = 'introduction',
  forkJoin = 'forkJoin',
  combineLatest = 'combineLatest',
  concat = 'concat',
  merge = 'merge',
  race = 'race',
  zip = 'zip',

  // Transformation Operators
  buffer = 'buffer',
  groupBy = 'groupBy',
  pluck = 'pluck',

  // Filtering Operators
  filter = 'filter',
  debounce = 'debounce',
  debounceTime = 'debounceTime',
  skip = 'skip',
  take = 'take',
  takeUntil = 'takeUntil',
  takeWhile = 'takeWhile',
  throttle = 'throttle',
  throttleTime = 'throttleTime',




  // HIGHER-ORDER OBSERVABLES
  introductionHigherOrderObservables = 'introduction',
  map = 'map',
  concatMap = 'concatMap',
  mergeMap = 'mergeMap',
  flatMap = 'flatMap',
  exhaustMap = 'exhaustMap',
  switchMap = 'switchMap',

  // SUBJECTS
  introductionSubjects = 'introduction',
  subject = 'subjects',
  behaviorSubject = 'behavior-subject',
  replaySubject = 'replay-subject',
  asyncSubject = 'async-subject',

}
