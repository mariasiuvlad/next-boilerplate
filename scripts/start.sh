#!/bin/sh
if [ "${RUN_STORYBOOK}" = "true" ]
then
   yarn storybook:serve
else
   yarn serve
fi