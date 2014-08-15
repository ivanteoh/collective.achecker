.. contents::

Introduction
============

``collective.achecker`` is a Plone 4 add-on that provides a TinyMCE plugin
that allows authors to check accessibility of the page using a new toolbar
button in Plone's TinyMCE editor.

Installation
============

Add ``collective.achecker`` to your buildout in the ``eggs`` list, or
as a dependency in the ``install_requires`` list in the ``setup.py`` file
for a product that is already installed in your build. The package's
configuration is loaded automatically by Plone.

You must also install the product in Plone's Add-on control panel.

Usage
=====

Use the new acheck button for accessibility checking using AChecker API.
