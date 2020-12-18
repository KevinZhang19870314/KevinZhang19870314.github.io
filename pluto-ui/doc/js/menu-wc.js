'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="compodoc-logo" data-src=images/lingxi-logo.png> 
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="请输入查询关键字"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>入门指南</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>概述
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>手册
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>使用</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/主题theme.html" data-type="entity-link" data-context-id="additional">主题Theme</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/国际化i18n.html" data-type="entity-link" data-context-id="additional">国际化i18n</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>组件列表</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/NpBox.html" data-type="entity-link">NpBox</a>
                            </li>
                            <li class="link">
                                <a href="components/NpButton.html" data-type="entity-link">NpButton</a>
                            </li>
                            <li class="link">
                                <a href="components/NpCheckbox.html" data-type="entity-link">NpCheckbox</a>
                            </li>
                            <li class="link">
                                <a href="components/NpCircleBar.html" data-type="entity-link">NpCircleBar</a>
                            </li>
                            <li class="link">
                                <a href="components/NpCropper.html" data-type="entity-link">NpCropper</a>
                            </li>
                            <li class="link">
                                <a href="components/NpDatePicker.html" data-type="entity-link">NpDatePicker</a>
                            </li>
                            <li class="link">
                                <a href="components/NpDatePickerPopup.html" data-type="entity-link">NpDatePickerPopup</a>
                            </li>
                            <li class="link">
                                <a href="components/NpDateRangePicker.html" data-type="entity-link">NpDateRangePicker</a>
                            </li>
                            <li class="link">
                                <a href="components/NpDateRangePickerPopup.html" data-type="entity-link">NpDateRangePickerPopup</a>
                            </li>
                            <li class="link">
                                <a href="components/NpDraggablePics.html" data-type="entity-link">NpDraggablePics</a>
                            </li>
                            <li class="link">
                                <a href="components/NpDropdown.html" data-type="entity-link">NpDropdown</a>
                            </li>
                            <li class="link">
                                <a href="components/NpImgUpload.html" data-type="entity-link">NpImgUpload</a>
                            </li>
                            <li class="link">
                                <a href="components/NpInput.html" data-type="entity-link">NpInput</a>
                            </li>
                            <li class="link">
                                <a href="components/NpKebab.html" data-type="entity-link">NpKebab</a>
                            </li>
                            <li class="link">
                                <a href="components/NpMonthPicker.html" data-type="entity-link">NpMonthPicker</a>
                            </li>
                            <li class="link">
                                <a href="components/NpPanel.html" data-type="entity-link">NpPanel</a>
                            </li>
                            <li class="link">
                                <a href="components/NpRadioButton.html" data-type="entity-link">NpRadioButton</a>
                            </li>
                            <li class="link">
                                <a href="components/NpRadioGroup.html" data-type="entity-link">NpRadioGroup</a>
                            </li>
                            <li class="link">
                                <a href="components/NpSideNav.html" data-type="entity-link">NpSideNav</a>
                            </li>
                            <li class="link">
                                <a href="components/NpSwitch.html" data-type="entity-link">NpSwitch</a>
                            </li>
                            <li class="link">
                                <a href="components/NpTable.html" data-type="entity-link">NpTable</a>
                            </li>
                            <li class="link">
                                <a href="components/NpTextarea.html" data-type="entity-link">NpTextarea</a>
                            </li>
                            <li class="link">
                                <a href="components/NpTitle.html" data-type="entity-link">NpTitle</a>
                            </li>
                            <li class="link">
                                <a href="components/NpYearPicker.html" data-type="entity-link">NpYearPicker</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#directives-links"' :
                                'data-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>指令列表</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/NpDropdownItemDirective.html" data-type="entity-link">NpDropdownItemDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NpTooltipDirective.html" data-type="entity-link">NpTooltipDirective</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>可注入的</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link">LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageBusService.html" data-type="entity-link">MessageBusService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotifyService.html" data-type="entity-link">NotifyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NpDatePickerService.html" data-type="entity-link">NpDatePickerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OverlayService.html" data-type="entity-link">OverlayService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>接口</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ColumnDef.html" data-type="entity-link">ColumnDef</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DateData.html" data-type="entity-link">DateData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatePickerFooterItem.html" data-type="entity-link">DatePickerFooterItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DayDataPerMonth.html" data-type="entity-link">DayDataPerMonth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Event.html" data-type="entity-link">Event</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImageCropperResult.html" data-type="entity-link">ImageCropperResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KebabItem.html" data-type="entity-link">KebabItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MonthData.html" data-type="entity-link">MonthData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NpDropdownItem.html" data-type="entity-link">NpDropdownItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NpDropdownSettings.html" data-type="entity-link">NpDropdownSettings</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NpSideNavItem.html" data-type="entity-link">NpSideNavItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/YearData.html" data-type="entity-link">YearData</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>管道列表</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/SafeHtmlPipe.html" data-type="entity-link">SafeHtmlPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>其他</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">枚举列表</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">函数</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">类型别名</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">变量</a>
                            </li>
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});