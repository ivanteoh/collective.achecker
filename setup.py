from setuptools import setup, find_packages
import os

version = '0.1'

setup(name='collective.achecker',
      version=version,
      description="TinyMCE Plugin for AChecker",
      long_description=open("README.rst").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      classifiers=[
          "Programming Language :: Python",
      ],
      keywords='Plone Python TinyMCE',
      author='Ivan Teoh',
      author_email='ivan@pretaweb.com',
      url='',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['collective'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'Products.TinyMCE',
      ],
      extras_require={
          'test': [
              'plone.app.testing',
          ],
      },
      entry_points="""
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
