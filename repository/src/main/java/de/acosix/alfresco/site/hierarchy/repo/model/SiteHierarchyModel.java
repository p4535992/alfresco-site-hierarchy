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
package de.acosix.alfresco.site.hierarchy.repo.model;

import org.alfresco.service.namespace.QName;

/**
 * @author Axel Faust, <a href="http://acosix.de">Acosix GmbH</a>
 */
public interface SiteHierarchyModel
{

    static final String SERVICE_NAMESPACE_URI = "http://acosix.de/service/siteHierarchy/1.0";

    static final String MODEL_NAMESPACE_URI = "http://acosix.de/model/siteHierarchy/1.0";

    static final String MODEL_NAMESPACE_PREFIX = "aco6sh";

    static final QName MODEL = QName.createQName(MODEL_NAMESPACE_URI, "model");

    static final QName ASPECT_TOP_LEVEL_SITE = QName.createQName(MODEL_NAMESPACE_URI, "topLevelSite");

    static final QName ASPECT_HIERARCHY_SITE = QName.createQName(MODEL_NAMESPACE_URI, "hierarchySite");

    static final QName ASSOC_CHILD_SITE = QName.createQName(MODEL_NAMESPACE_URI, "childSite");
}