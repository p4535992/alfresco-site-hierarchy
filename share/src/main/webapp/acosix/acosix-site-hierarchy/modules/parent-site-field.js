/*
 * Copyright 2016 Acosix GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint -W003 */
if (typeof Acosix === 'undefined' || !Acosix)
{
    var Acosix = {};
}
/* jshint +W003 */

(function()
{
    var Dom = YAHOO.util.Dom;

    Acosix.customisation = Acosix.customisation || {};
    Acosix.customisation.SiteHierarchy = Acosix.customisation.SiteHierarchy || {};

    Acosix.customisation.SiteHierarchy.parentSiteFieldInitialiser = function Acosix_parentSiteFieldInitialiser(currentValue)
    {
        if (!this.widgets.parentSite)
        {
            // usually, messages are applied using inline code generated by FTL template
            // manually copy over messages of module component which should also contain necessary fragments for ObjectFinder
            Alfresco.util.copyMessages(this.name, 'Alfresco.ObjectFinder');
            Alfresco.util.copyMessages(this.name, 'Alfresco.ObjectRenderer');
    
            this.widgets.parentSite = new Alfresco.ObjectFinder(this.id + '-parentSite-cntrl', this.id + '-parentSite');
            this.widgets.parentSite.setOptions({
                field : 'aco6sh_parentSite',
                compactMode : false,
                mandatory : false,
                currentValue : currentValue || '',
                selectActionLabel : Alfresco.util.message('button.select'),
                itemFamily : 'node',
                itemType : 'st:site',
                parentNodeRef : 'alfresco://sites/home',
                multipleSelectMode : false,
                displayMode : 'items'
            });
    
            // need to call this explicitly as both default load events (page load and dialog template load) have already been passed and
            // object-finder dependencies may still be in the queue if they weren't already available
            Alfresco.util.YUILoaderHelper.loadComponents(false);
    
            Dom.removeClass(this.id + '-acosix-site-hierarchy', 'hidden');
        }
    };
}());
