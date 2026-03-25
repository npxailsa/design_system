import styles from "./DocsTemplate.module.css";
import { NpxCubeLogoVariant7 } from "../NpxCubeLogoVariant7/NpxCubeLogoVariant7";
import { OutlineIconsNameAlertOutlineCategoryOutline } from "../OutlineIconsNameAlertOutlineCategoryOutline/OutlineIconsNameAlertOutlineCategoryOutline";
import { OutlineIconsNameAlertDecagramOutlineCategoryOutline } from "../OutlineIconsNameAlertDecagramOutlineCategoryOutline/OutlineIconsNameAlertDecagramOutlineCategoryOutline";
import { OutlineIconsNameTagOutlineCategoryOutline } from "../OutlineIconsNameTagOutlineCategoryOutline/OutlineIconsNameTagOutlineCategoryOutline";
import { OutlineIconsNameTagTextOutlineCategoryOutline } from "../OutlineIconsNameTagTextOutlineCategoryOutline/OutlineIconsNameTagTextOutlineCategoryOutline";
import { OutlineIconsNameCogOutlineCategoryOutline } from "../OutlineIconsNameCogOutlineCategoryOutline/OutlineIconsNameCogOutlineCategoryOutline";
import { OutlineIconsNameWrenchOutlineCategoryOutline } from "../OutlineIconsNameWrenchOutlineCategoryOutline/OutlineIconsNameWrenchOutlineCategoryOutline";
import { OutlineIconsNameArchiveOutlineCategoryOutline } from "../OutlineIconsNameArchiveOutlineCategoryOutline/OutlineIconsNameArchiveOutlineCategoryOutline";
import { OutlineIconsNameCubeOutlineCategoryOutline } from "../OutlineIconsNameCubeOutlineCategoryOutline/OutlineIconsNameCubeOutlineCategoryOutline";
import { OutlineIconsNameStarOutlineCategoryOutline } from "../OutlineIconsNameStarOutlineCategoryOutline/OutlineIconsNameStarOutlineCategoryOutline";

export interface IDocsTemplateProps {
  className?: string;
}

export const DocsTemplate = ({
  className,
  ...props
}: IDocsTemplateProps): JSX.Element => {
  return (
    <div className={styles.docsTemplate + " " + className}>
      <div className={styles.docsContent}>
        <div className={styles.npxLogoPadding}>
          <NpxCubeLogoVariant7
            className={styles.npxCubeLogoVariant7Instance}
          ></NpxCubeLogoVariant7>
        </div>
        <div className={styles.titleSubtitle}>
          <div className={styles.typography}>Typography </div>
          <div
            className={
              styles.iconsAreVisualRepresentationsOfCommandsFeaturesDirectoriesOrCommonActions
            }
          >
            Icons are visual representations of commands, features, directories,
            or common actions{" "}
          </div>
        </div>
        <div
          className={
            styles.iconsAreSymbolsDesignedToRepresentConceptsOrSpecificFeaturesACompanySIconographyStyleCanExpressALotAboutABrandAndItsValuesOurIconographyHasRoundedCornersAndCurvesToAlignWithOurTypographyAndOtherRoundedUiElementsWhilstSquareEndTerminalsAddBoldnessToCreateAHarmoniousAppExpressionOfNpxSBroaderDesignLanguage
          }
        >
          Icons are symbols designed to represent concepts or specific features.
          A company&#039;s iconography style can express a lot about a brand and
          its values.
          <br />
          Our iconography has rounded corners and curves to align with our
          typography and other rounded UI elements, whilst square end terminals
          add boldness to create a harmonious app expression of NPX’s broader
          design language.
        </div>
        <div className={styles.designTokes}>
          <div className={styles.titleSubtitle2}>
            <div className={styles.designTokens}>Design Tokens </div>
            <div className={styles.weUseTheFollowingTokensToRenderOurIcons}>
              We use the following tokens to render our icons:{" "}
            </div>
          </div>
          <div className={styles.codeBlock}>
            <div
              className={
                styles.tokenNameDescriptionBrandIconMainPrimaryIconColorIconSize2XSmall2XSmallIconSizeIconSizeXSmallXSmallIconSizeIconSizeSmallSmallIconSizeIconSizeDefaultDefaultIconSizeIconSizeLargeLargeIconSize
              }
            >
              <span>
                <span
                  className={
                    styles.tokenNameDescriptionBrandIconMainPrimaryIconColorIconSize2XSmall2XSmallIconSizeIconSizeXSmallXSmallIconSizeIconSizeSmallSmallIconSizeIconSizeDefaultDefaultIconSizeIconSizeLargeLargeIconSizeSpan
                  }
                >
                  | Token Name | Description |
                  <br />
                </span>
                <span
                  className={
                    styles.tokenNameDescriptionBrandIconMainPrimaryIconColorIconSize2XSmall2XSmallIconSizeIconSizeXSmallXSmallIconSizeIconSizeSmallSmallIconSizeIconSizeDefaultDefaultIconSizeIconSizeLargeLargeIconSizeSpan2
                  }
                >
                  | --brand-icon-main | Primary icon color |
                  <br />| --icon-size-2x-small | 2x-small icon size |
                  <br />| --icon-size-x-small | x-small icon size |
                  <br />| --icon-size-small | small icon size |
                  <br />| --icon-size-default | default icon size |
                  <br />| --icon-size-large | large icon size |
                </span>
              </span>{" "}
            </div>
          </div>
        </div>
        <div className={styles.iconPrinciples}>
          <div className={styles.iconographyPrinciples}>
            Iconography principles{" "}
          </div>
          <div
            className={
              styles.followTheseCommonDesignPrinciplesByUsingIconsInACohesiveUsefulAndLegibleWay
            }
          >
            Follow these common design principles by using icons in a cohesive,
            useful, and legible way.{" "}
          </div>
        </div>
        <div className={styles.principles}>
          <div className={styles.principle1}>
            <div className={styles.oneDesignForUniversalUnderstanding}>
              1. Design for universal understanding{" "}
            </div>
            <div
              className={
                styles.designIconsThatUseWidelyRecognizedSymbolsAndEstablishedVisualMetaphorsEnsureIconsAreEasilyUnderstoodByADiverseAudienceByAvoidingSpecificCulturalOrLanguageAspects
              }
            >
              Design icons that use widely recognized symbols and established
              visual metaphors. Ensure icons are easily understood by a diverse
              audience by avoiding specific cultural or language aspects.{" "}
            </div>
          </div>
          <div className={styles.principle2}>
            <div
              className={styles.twoBalanceSimplicityAndDetailToCreateLegibility}
            >
              2. Balance simplicity and detail to create legibility{" "}
            </div>
            <div
              className={
                styles.craftIconsThatAreSimpleEnoughForQuickRecognitionYetDetailedEnoughToConveyMeaningEffectivelyEvenAtSmallSizes
              }
            >
              Craft icons that are simple enough for quick recognition, yet
              detailed enough to convey meaning effectively, even at small
              sizes.{" "}
            </div>
          </div>
          <div className={styles.principle3}>
            <div className={styles.threeMaintainVisualHarmony}>
              3. Maintain visual harmony{" "}
            </div>
            <div
              className={
                styles.ensureIconsWorkTogetherAsACohesiveSystemByAdheringToConsistentSizeShapeAndStyleGuidelinesAcrossTheEntireSet
              }
            >
              Ensure icons work together as a cohesive system by adhering to
              consistent size, shape, and style guidelines across the entire
              set.{" "}
            </div>
          </div>
          <div className={styles.principle4}>
            <div className={styles.fourUseIconsIntentionally}>
              4. Use icons intentionally{" "}
            </div>
            <div
              className={
                styles.iconsArePowerfulSignifiersThatCanAidComprehensionAndHelpWithNavigationTheyCanAlsoAddClutterOrConfusePeopleWhenUsedPoorlyUseTextLabelsToSupportIconsWhereverPossibleAndAvoidUsingIconsWhereTheyArenTNecessary
              }
            >
              Icons are powerful signifiers that can aid comprehension and help
              with navigation. They can also add clutter or confuse people when
              used poorly. Use text labels to support icons wherever possible,
              and avoid using icons where they aren’t necessary.{" "}
            </div>
          </div>
        </div>
        <div className={styles.titleUsingIcons}>
          <div className={styles.usingIcons}>Using icons </div>
          <div
            className={
              styles.toUseAnIconImportTheIconComponentAndASpecificIconFromMuiIconsMaterial
            }
          >
            <span>
              <span
                className={
                  styles.toUseAnIconImportTheIconComponentAndASpecificIconFromMuiIconsMaterialSpan
                }
              >
                To use an icon, import the Icon component and a specific icon
                from
              </span>
              <span
                className={
                  styles.toUseAnIconImportTheIconComponentAndASpecificIconFromMuiIconsMaterialSpan2
                }
              >
                @mui/icons-material
              </span>
            </span>{" "}
          </div>
        </div>
        <div className={styles.codeBlock2}>
          <div
            className={
              styles.importIconFromComponentsIconImportHomeIconFromMuiIconsMaterialHomeConstMyComponentIconIconHomeIconColorPrimarySizeDefault
            }
          >
            import &lcub; Icon &rcub; from &#039;./components/Icon&#039;;
            <br />
            import HomeIcon from &#039;@mui/icons-material/Home&#039;;
            <br />
            <br />
            const MyComponent = () =&gt; (
            <br /> &lt;Icon icon=&lcub;HomeIcon&rcub; color=&quot;primary&quot;
            size=&quot;default&quot; /&gt;
            <br />
            );
          </div>
        </div>
        <div
          className={
            styles.youCanFindAllAvailableIconsInTheMaterialUiIconSearchSimplyFindTheNameOfTheIconAndImportItFromMuiIconsMaterialForExample
          }
        >
          <span>
            <span
              className={
                styles.youCanFindAllAvailableIconsInTheMaterialUiIconSearchSimplyFindTheNameOfTheIconAndImportItFromMuiIconsMaterialForExampleSpan
              }
            >
              You can find all available icons in the
            </span>
            <span
              className={
                styles.youCanFindAllAvailableIconsInTheMaterialUiIconSearchSimplyFindTheNameOfTheIconAndImportItFromMuiIconsMaterialForExampleSpan2
              }
            >
              Material UI Icon Search
            </span>
            <span
              className={
                styles.youCanFindAllAvailableIconsInTheMaterialUiIconSearchSimplyFindTheNameOfTheIconAndImportItFromMuiIconsMaterialForExampleSpan
              }
            >
              . Simply find the name of the icon and import it from
            </span>
            <span
              className={
                styles.youCanFindAllAvailableIconsInTheMaterialUiIconSearchSimplyFindTheNameOfTheIconAndImportItFromMuiIconsMaterialForExampleSpan3
              }
            >
              @mui/icons-material
              <br />
            </span>
            <span
              className={
                styles.youCanFindAllAvailableIconsInTheMaterialUiIconSearchSimplyFindTheNameOfTheIconAndImportItFromMuiIconsMaterialForExampleSpan
              }
            >
              For example:
            </span>
          </span>{" "}
        </div>
        <div className={styles.codeBlock2}>
          <div
            className={
              styles.homeImportHomeIconFromMuiIconsMaterialHomeFavoriteImportFavoriteIconFromMuiIconsMaterialFavoriteSettingsImportSettingsIconFromMuiIconsMaterialSettings
            }
          >
            Home -&gt; import HomeIcon from &#039;@mui/icons-material/Home&#039;
            <br />
            Favorite -&gt; import FavoriteIcon from
            &#039;@mui/icons-material/Favorite&#039;
            <br />
            Settings -&gt; import SettingsIcon from
            &#039;@mui/icons-material/Settings&#039;{" "}
          </div>
        </div>
        <div
          className={
            styles.ourIconsAreAvailableAsAComponentReactViaMuiIconsWithinFigmaAndInOurDocumentationViewMuiSymbolsIconsMuiMaterialGitHubComponentUsageMuiSymbolsFigmaPluginNpxDesignSystemCuratedIconsFigmaLibrary
          }
        >
          <span>
            <span
              className={
                styles.ourIconsAreAvailableAsAComponentReactViaMuiIconsWithinFigmaAndInOurDocumentationViewMuiSymbolsIconsMuiMaterialGitHubComponentUsageMuiSymbolsFigmaPluginNpxDesignSystemCuratedIconsFigmaLibrarySpan
              }
            >
              Our icons are available as a component (React, via MUI Icons),
              within Figma, and in our documentation.
              <br />
            </span>
            <ul
              className={
                styles.ourIconsAreAvailableAsAComponentReactViaMuiIconsWithinFigmaAndInOurDocumentationViewMuiSymbolsIconsMuiMaterialGitHubComponentUsageMuiSymbolsFigmaPluginNpxDesignSystemCuratedIconsFigmaLibrarySpan2
              }
            >
              <li>View MUI Symbols icons</li>
            </ul>
            <ul
              className={
                styles.ourIconsAreAvailableAsAComponentReactViaMuiIconsWithinFigmaAndInOurDocumentationViewMuiSymbolsIconsMuiMaterialGitHubComponentUsageMuiSymbolsFigmaPluginNpxDesignSystemCuratedIconsFigmaLibrarySpan2
              }
            >
              <li>MUI Material GitHub component usage</li>
            </ul>
            <ul
              className={
                styles.ourIconsAreAvailableAsAComponentReactViaMuiIconsWithinFigmaAndInOurDocumentationViewMuiSymbolsIconsMuiMaterialGitHubComponentUsageMuiSymbolsFigmaPluginNpxDesignSystemCuratedIconsFigmaLibrarySpan2
              }
            >
              <li>MUI Symbols Figma Plugin</li>
            </ul>
            <ul
              className={
                styles.ourIconsAreAvailableAsAComponentReactViaMuiIconsWithinFigmaAndInOurDocumentationViewMuiSymbolsIconsMuiMaterialGitHubComponentUsageMuiSymbolsFigmaPluginNpxDesignSystemCuratedIconsFigmaLibrarySpan2
              }
            >
              <li>NPX Design System Curated Icons (Figma library)</li>
            </ul>
          </span>{" "}
        </div>
        <div className={styles.visualStyle}>
          <div className={styles.visualStyle2}>Visual style </div>
          <div
            className={
              styles.ourIconsAreAvailableAsFilledOrOutlineOptionsDependantOnTheScenarioYouMayNeedThemForWhereAccessibilityContrastIsLowUsingFilledIconsWillCreateABetterVisualDistinctionForThoseWhoMayBeColourblindOrPartiallySighted
            }
          >
            Our icons are available as “filled” or “outline” options, dependant
            on the scenario you may need them for. Where accessibility contrast
            is low, using “filled” icons will create a better visual distinction
            for those who may be colourblind or partially sighted.{" "}
          </div>
        </div>
        <div className={styles.subtitle}>
          <div className={styles.simplicityMetaphor}>
            Simplicity &amp; metaphor{" "}
          </div>
        </div>
        <div
          className={
            styles.whereverPossibleUseIconsFromTheCuratedIconsFigmaFileToMaintainConsistencyAndReinforceVisualConceptsAcrossExperiencesSoTheyBecomeFamiliarToUsers
          }
        >
          Wherever possible, use icons from the Curated Icons Figma file to
          maintain consistency and reinforce visual concepts across experiences,
          so they become familiar to users.{" "}
        </div>
        <div className={styles.simplicity}>
          <div className={styles.do}>
            <OutlineIconsNameAlertOutlineCategoryOutline
              name="alert-outline"
              className={styles.outlineIconsInstance}
            ></OutlineIconsNameAlertOutlineCategoryOutline>
            <div className={styles.bottom}>
              <div className={styles.do2}>Do </div>
              <div
                className={
                  styles.useAnExistingIconOrVisualMetaphorForConsistencyAndClarityWhereverPossible
                }
              >
                Use an existing icon or visual metaphor for consistency and
                clarity wherever possible.{" "}
              </div>
            </div>
          </div>
          <div className={styles.do}>
            <OutlineIconsNameAlertDecagramOutlineCategoryOutline
              name="alert-decagram-outline"
              className={styles.outlineIconsInstance2}
            ></OutlineIconsNameAlertDecagramOutlineCategoryOutline>
            <div className={styles.bottom2}>
              <div className={styles.donT}>Don’t </div>
              <div
                className={
                  styles.createANewIconIfASuitableOneAlreadyExistsToRepresentTheSameMetaphor
                }
              >
                Create a new icon if a suitable one already exists to represent
                the same metaphor.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.simpleShapes}>
          <div
            className={
              styles.useSimplifiedShapesWithTheMinimumDetailRequiredToExpressAMetaphorTheGoalOfAnIconIsToAidClearQuickComprehensionExcessDetailCanDistractAndDoTheOppositeTheSmallSizeOfIconsMakesItHarderToSeeFineDetailsSoWeOptimiseForSimplicityAndLegibility
            }
          >
            Use simplified shapes with the minimum detail required to express a
            metaphor. The goal of an icon is to aid clear, quick comprehension —
            excess detail can distract and do the opposite. The small size of
            icons makes it harder to see fine details, so we optimise for
            simplicity and legibility.{" "}
          </div>
          <div className={styles.frame3}>
            <div className={styles.do}>
              <OutlineIconsNameTagOutlineCategoryOutline
                name="tag-outline"
                className={styles.outlineIconsInstance3}
              ></OutlineIconsNameTagOutlineCategoryOutline>
              <div className={styles.bottom}>
                <div className={styles.do2}>Do </div>
                <div
                  className={
                    styles.useSimpleShapesWithTheMinimumDetailRequiredToExpressAMetaphorWithClarityAndLegibility
                  }
                >
                  Use simple shapes with the minimum detail required to express
                  a metaphor with clarity and legibility.{" "}
                </div>
              </div>
            </div>
            <div className={styles.do}>
              <OutlineIconsNameTagTextOutlineCategoryOutline
                name="tag-text-outline"
                className={styles.outlineIconsInstance4}
              ></OutlineIconsNameTagTextOutlineCategoryOutline>
              <div className={styles.bottom2}>
                <div className={styles.donT}>Don’t </div>
                <div
                  className={
                    styles.donTAddExcessDetailUnlessNecessaryThisCanDistractAndBeChallengingToReadAtASmallSizes
                  }
                >
                  Don’t add excess detail unless necessary. This can distract
                  and be challenging to read at a small sizes.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.metaphors}>
          <div
            className={
              styles.whenCreatingANewIconUseSymbolsThatClearlyRepresentAConceptTryToUseMetaphorsWithClearAndEstablishedAssociationsWhereverPossible
            }
          >
            When creating a new icon, use symbols that clearly represent a
            concept. Try to use metaphors with clear and established
            associations wherever possible.{" "}
          </div>
          <div className={styles.frame4}>
            <div className={styles.do3}>
              <OutlineIconsNameCogOutlineCategoryOutline
                name="cog-outline"
                className={styles.outlineIconsInstance5}
              ></OutlineIconsNameCogOutlineCategoryOutline>
              <div className={styles.settings}>Settings </div>
              <div className={styles.bottom}>
                <div className={styles.do2}>Do </div>
                <div
                  className={
                    styles.useSimpleShapesWithTheMinimumDetailRequiredToExpressAMetaphorWithClarityAndLegibility
                  }
                >
                  Use simple shapes with the minimum detail required to express
                  a metaphor with clarity and legibility.{" "}
                </div>
              </div>
            </div>
            <div className={styles.do3}>
              <OutlineIconsNameWrenchOutlineCategoryOutline
                name="wrench-outline"
                className={styles.outlineIconsInstance6}
              ></OutlineIconsNameWrenchOutlineCategoryOutline>
              <div className={styles.settings}>Settings </div>
              <div className={styles.bottom2}>
                <div className={styles.donT}>Don’t </div>
                <div
                  className={
                    styles.donTAddExcessDetailUnlessNecessaryThisCanDistractAndBeChallengingToReadAtASmallSizes
                  }
                >
                  Don’t add excess detail unless necessary. This can distract
                  and be challenging to read at a small sizes.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.perspective}>
          <div className={styles.perspective2}>
            <div className={styles.perspectiveAngles}>
              Perspective &amp; angles{" "}
            </div>
          </div>
          <div
            className={
              styles.shapesShouldAppearStraightOnOrFromAFull90DegreeProfileDonTUseDiagonalPerspectivesToCreate3DShapesBecauseTheseCanBeHardToDiscernAtAGlanceEspeciallyForPeopleWithSomeCognitiveDisabilities
            }
          >
            Shapes should appear straight on or from a full 90 degree profile.
            Don’t use diagonal perspectives to create 3D shapes because these
            can be hard to discern at a glance, especially for people with some
            cognitive disabilities.{" "}
          </div>
          <div className={styles.perspective3}>
            <div className={styles.do4}>
              <OutlineIconsNameArchiveOutlineCategoryOutline
                name="archive-outline"
                className={styles.outlineIconsInstance7}
              ></OutlineIconsNameArchiveOutlineCategoryOutline>
              <div className={styles.bottom3}>
                <div className={styles.do2}>Do </div>
                <div
                  className={
                    styles.tryToUseShapesThatAppearStraightOnWithoutDimensionality
                  }
                >
                  Try to use shapes that appear straight on without
                  dimensionality.{" "}
                </div>
              </div>
            </div>
            <div className={styles.do3}>
              <OutlineIconsNameCubeOutlineCategoryOutline
                name="cube-outline"
                className={styles.outlineIconsInstance8}
              ></OutlineIconsNameCubeOutlineCategoryOutline>
              <div className={styles.bottom2}>
                <div className={styles.donT}>Don’t </div>
                <div
                  className={
                    styles.donTUseDiagonalPerspectivesToCreate3DShapesAsTheyCanBeHardToDiscernAtAGlance
                  }
                >
                  Don’t use diagonal perspectives to create 3D shapes as they
                  can be hard to discern at a glance.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sizeSpacing}>
          <div className={styles.sizeSpacing2}>Size &amp; spacing </div>
          <div
            className={
              styles.systemIconsAreAvailableAtMultipleSizesDependingOfTheirUsage
            }
          >
            System icons are available at multiple sizes, depending of their
            usage:{" "}
          </div>
        </div>
        <div className={styles.default}>
          <div className={styles.frame7}>
            <div className={styles.default16PxUseInMostCases}>
              Default (16px) — use in most cases{" "}
            </div>
          </div>
          <div
            className={
              styles.defaultIconsAre1616PxInSizeAndAreTheDefaultSizeInOurSystemThisSizeBalancesHarmoniouslyWithOurRegularBodyTextAndTheDensityOfTheAppsNpxCreates
            }
          >
            Default icons are 16 × 16px in size and are the default size in our
            system. This size balances harmoniously with our regular body text
            and the density of the apps NPX creates.{" "}
          </div>
        </div>
        <div className={styles.small}>
          <div className={styles.frame7}>
            <div className={styles.small14PxUseSparingly}>
              Small (14px) — Use sparingly{" "}
            </div>
          </div>
          <div
            className={
              styles.smallIconsAre1414PxInSizeAndAreDownscaledFromOur16PxDefaultThisSizeShouldBeUsedForFootnotesAndTermsThatDonTNeedProminentPlacementInOurVisualHierarchyOutsideOfAccompanyingSmallTextLimitUsageOfSmallIconsToTheFollowingAreasFootnotesTermsAndConditionsCommentsMetricsDataDisplayTables
            }
          >
            <span>
              <span
                className={
                  styles.smallIconsAre1414PxInSizeAndAreDownscaledFromOur16PxDefaultThisSizeShouldBeUsedForFootnotesAndTermsThatDonTNeedProminentPlacementInOurVisualHierarchyOutsideOfAccompanyingSmallTextLimitUsageOfSmallIconsToTheFollowingAreasFootnotesTermsAndConditionsCommentsMetricsDataDisplayTablesSpan
                }
              >
                Small icons are 14 × 14px in size and are downscaled from our
                16px default. This size should be used for footnotes and terms
                that don’t need prominent placement in our visual hierarchy.
                Outside of accompanying small text, limit usage of small icons
                to the following areas:
                <br />
              </span>
              <ul
                className={
                  styles.smallIconsAre1414PxInSizeAndAreDownscaledFromOur16PxDefaultThisSizeShouldBeUsedForFootnotesAndTermsThatDonTNeedProminentPlacementInOurVisualHierarchyOutsideOfAccompanyingSmallTextLimitUsageOfSmallIconsToTheFollowingAreasFootnotesTermsAndConditionsCommentsMetricsDataDisplayTablesSpan2
                }
              >
                <li>Footnotes, terms and conditions</li>
                <li>Comments</li>
                <li>Metrics &amp; data display</li>
                <li>Tables</li>
              </ul>
            </span>{" "}
          </div>
        </div>
        <div className={styles.xSmall}>
          <div className={styles.frame7}>
            <div className={styles.xSmall12PxUseRarely}>
              X-Small (12px) — Use rarely{" "}
            </div>
          </div>
          <div
            className={
              styles.xSmallIconsAre1212PxInSizeAndAreDownscaledFromOur16PxDefaultThisSizeShouldBeUsedSparinglyAsTheyArenTAsLegibleAs16PxIconsLimitUsageOf12PxIconsToAccompanyingXSmallTextOnly
            }
          >
            X-Small icons are 12 × 12px in size and are downscaled from our 16px
            default. This size should be used sparingly as they aren&#039;t as
            legible as 16px icons. Limit usage of 12px icons to accompanying
            X-Small text only.{" "}
          </div>
        </div>
        <div className={styles.twoXSmall}>
          <div className={styles.frame7}>
            <div className={styles.twoXSmall10PxUseRarely}>
              2X-Small (10px) — Use rarely{" "}
            </div>
          </div>
          <div
            className={
              styles.twoXSmallIconsAre1010PxInSizeAndAreDownscaledFromOur16PxDefaultThisSizeShouldBeUsedSparinglyAsTheyArenTAsLegibleAs16PxIconsLimitUsageOf10PxIconsToAccompanying2XSmallTextOnly
            }
          >
            2X-Small icons are 10 × 10px in size and are downscaled from our
            16px default. This size should be used sparingly as they aren&#039;t
            as legible as 16px icons. Limit usage of 10px icons to accompanying
            2X-Small text only.{" "}
          </div>
        </div>
        <div className={styles.large}>
          <div className={styles.frame7}>
            <div className={styles.large18PxUseSparingly}>
              Large (18px) — Use sparingly{" "}
            </div>
          </div>
          <div
            className={
              styles.largeIconsAre1818PxInSizeAndAreUpscaledFromOur16PxDefaultThisSizeShouldBeUsedSparinglyAsTheyCanOverwhelmTheUiAtTimesLimitUsageOf18PxIconsToTheFollowingAreasMetricsDataDisplayHeadingsSubtitlesDashboards
            }
          >
            <span>
              <span
                className={
                  styles.largeIconsAre1818PxInSizeAndAreUpscaledFromOur16PxDefaultThisSizeShouldBeUsedSparinglyAsTheyCanOverwhelmTheUiAtTimesLimitUsageOf18PxIconsToTheFollowingAreasMetricsDataDisplayHeadingsSubtitlesDashboardsSpan
                }
              >
                Large icons are 18 × 18px in size and are upscaled from our 16px
                default. This size should be used sparingly as they can
                overwhelm the UI at times. Limit usage of 18px icons to the
                following areas:
                <br />
              </span>
              <ul
                className={
                  styles.largeIconsAre1818PxInSizeAndAreUpscaledFromOur16PxDefaultThisSizeShouldBeUsedSparinglyAsTheyCanOverwhelmTheUiAtTimesLimitUsageOf18PxIconsToTheFollowingAreasMetricsDataDisplayHeadingsSubtitlesDashboardsSpan2
                }
              >
                <li>Metrics &amp; data display</li>
                <li>Headings &amp; subtitles</li>
                <li>Dashboards</li>
              </ul>
            </span>{" "}
          </div>
        </div>
        <img className={styles.size} src="size0.png" />
        <div
          className={
            styles.byDefaultThereIsAlwaysAtLeast2PxOfPaddingAroundAnIconAndInCasesWhereTheIconIsNotSquareItselfWeDefaultToTheLongestSideAndCentreTheIconOnItsShortestSideAllPaddingValuesShouldBeAppliedUsingTheDesignTokensWithinTheDesignSystem
          }
        >
          By default, there is always at least 2px of padding around an icon,
          and in cases where the icon is not square itself, we default to the
          longest side and centre the icon on its shortest side. All padding
          values should be applied using the design tokens within the design
          system.{" "}
        </div>
        <div className={styles.shapes}>
          <div className={styles.shapes2}>Shapes </div>
          <div
            className={
              styles.iconsUseConsistentShapesToEnsureAConsistentLookAndFeelAcrossTheSetMuiDesignedEachShapeForOpticalScaleAndBalanceSoThatTallerThinnerShapesDonTFeelLikeADifferentScaleFromShorterOrWiderShapes
            }
          >
            Icons use consistent shapes to ensure a consistent look and feel
            across the set. MUI designed each shape for optical scale and
            balance, so that taller, thinner shapes don’t feel like a different
            scale from shorter or wider shapes.{" "}
          </div>
        </div>
        <img className={styles.shapes3} src="shapes2.png" />
        <div className={styles.cornerCurves}>
          <div className={styles.frame7}>
            <div className={styles.cornerCurves2}>Corner &amp; curves </div>
          </div>
          <div
            className={
              styles.curvedEdgesLendToAFriendlierFeelButInternalEdgesRemainSharpToMaintainClarity
            }
          >
            Curved edges lend to a friendlier feel, but internal edges remain
            sharp to maintain clarity.{" "}
          </div>
        </div>
        <div className={styles.star}>
          <div className={styles.do4}>
            <OutlineIconsNameStarOutlineCategoryOutline
              name="star-outline"
              className={styles.outlineIconsInstance9}
            ></OutlineIconsNameStarOutlineCategoryOutline>
            <div className={styles.bottom3}>
              <div className={styles.do2}>Do </div>
              <div
                className={
                  styles.tryToUseShapesThatAppearStraightOnWithoutDimensionality
                }
              >
                Try to use shapes that appear straight on without
                dimensionality.{" "}
              </div>
            </div>
          </div>
          <div className={styles.do3}>
            <img className={styles.picture13} src="picture-1-30.png" />
            <div className={styles.bottom2}>
              <div className={styles.donT}>Don’t </div>
              <div
                className={
                  styles.donTUseDiagonalPerspectivesToCreate3DShapesAsTheyCanBeHardToDiscernAtAGlance
                }
              >
                Don’t use diagonal perspectives to create 3D shapes as they can
                be hard to discern at a glance.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.colour}>
          <div className={styles.colour2}>Colour </div>
          <div
            className={
              styles.likeMostElementsInOurSystemIconsUseDesignTokensForTheirColoursNeverUseInaccessibleColoursForIconsEspeciallyIfThereIsNoLabelToHelpTheUserFurtherParseItSMeaningThereShouldBeNoUseOfHardcodedColoursWithIconsPickFromTheDesignSystemTokensAvailable
            }
          >
            Like most elements in our system, icons use design tokens for their
            colours. Never use inaccessible colours for icons, especially if
            there is no label to help the user further parse it’s meaning. There
            should be no use of hardcoded colours with icons – pick from the
            design system tokens available.{" "}
          </div>
        </div>
        <div className={styles.contributions}>
          <div className={styles.contributionAddingNewIcons}>
            Contribution &amp; adding new icons{" "}
          </div>
          <div
            className={
              styles.currentlyWeUseMaterialSymbolsAsOurDefaultIconLibraryMaterialSymbolsHaveAnExtensiveVarietyOfOptionsAvailableWhichCanBeSearchedWithGoogleFontsInTheRareEventThatMaterialSymbolsDoesNotHaveAnAdequateIconAvailableDesignersCanContributeNewIdeasForIconsBeforeContributingANewIconTakeLookAtOurExistingIconsWithinMaterialSymbolsAndConsiderTheFollowingQuestionsIsTheIconIMContributingVerySimilarToAnotherSystemIconCouldMyIconBeConfusedWithAnotherConceptThatExistsInAppsDoesThisDesignReallyRequireAnIconAtAllWouldATextLabelButtonOrOtherApproachProvideAClearerAffordanceForCustomerUnderstanding
            }
          >
            <span>
              <span
                className={
                  styles.currentlyWeUseMaterialSymbolsAsOurDefaultIconLibraryMaterialSymbolsHaveAnExtensiveVarietyOfOptionsAvailableWhichCanBeSearchedWithGoogleFontsInTheRareEventThatMaterialSymbolsDoesNotHaveAnAdequateIconAvailableDesignersCanContributeNewIdeasForIconsBeforeContributingANewIconTakeLookAtOurExistingIconsWithinMaterialSymbolsAndConsiderTheFollowingQuestionsIsTheIconIMContributingVerySimilarToAnotherSystemIconCouldMyIconBeConfusedWithAnotherConceptThatExistsInAppsDoesThisDesignReallyRequireAnIconAtAllWouldATextLabelButtonOrOtherApproachProvideAClearerAffordanceForCustomerUnderstandingSpan
                }
              >
                Currently, we use
              </span>
              <span
                className={
                  styles.currentlyWeUseMaterialSymbolsAsOurDefaultIconLibraryMaterialSymbolsHaveAnExtensiveVarietyOfOptionsAvailableWhichCanBeSearchedWithGoogleFontsInTheRareEventThatMaterialSymbolsDoesNotHaveAnAdequateIconAvailableDesignersCanContributeNewIdeasForIconsBeforeContributingANewIconTakeLookAtOurExistingIconsWithinMaterialSymbolsAndConsiderTheFollowingQuestionsIsTheIconIMContributingVerySimilarToAnotherSystemIconCouldMyIconBeConfusedWithAnotherConceptThatExistsInAppsDoesThisDesignReallyRequireAnIconAtAllWouldATextLabelButtonOrOtherApproachProvideAClearerAffordanceForCustomerUnderstandingSpan2
                }
              ></span>
              <span
                className={
                  styles.currentlyWeUseMaterialSymbolsAsOurDefaultIconLibraryMaterialSymbolsHaveAnExtensiveVarietyOfOptionsAvailableWhichCanBeSearchedWithGoogleFontsInTheRareEventThatMaterialSymbolsDoesNotHaveAnAdequateIconAvailableDesignersCanContributeNewIdeasForIconsBeforeContributingANewIconTakeLookAtOurExistingIconsWithinMaterialSymbolsAndConsiderTheFollowingQuestionsIsTheIconIMContributingVerySimilarToAnotherSystemIconCouldMyIconBeConfusedWithAnotherConceptThatExistsInAppsDoesThisDesignReallyRequireAnIconAtAllWouldATextLabelButtonOrOtherApproachProvideAClearerAffordanceForCustomerUnderstandingSpan3
                }
              >
                Material Symbols
              </span>
              <span
                className={
                  styles.currentlyWeUseMaterialSymbolsAsOurDefaultIconLibraryMaterialSymbolsHaveAnExtensiveVarietyOfOptionsAvailableWhichCanBeSearchedWithGoogleFontsInTheRareEventThatMaterialSymbolsDoesNotHaveAnAdequateIconAvailableDesignersCanContributeNewIdeasForIconsBeforeContributingANewIconTakeLookAtOurExistingIconsWithinMaterialSymbolsAndConsiderTheFollowingQuestionsIsTheIconIMContributingVerySimilarToAnotherSystemIconCouldMyIconBeConfusedWithAnotherConceptThatExistsInAppsDoesThisDesignReallyRequireAnIconAtAllWouldATextLabelButtonOrOtherApproachProvideAClearerAffordanceForCustomerUnderstandingSpan2
                }
              ></span>
              <span
                className={
                  styles.currentlyWeUseMaterialSymbolsAsOurDefaultIconLibraryMaterialSymbolsHaveAnExtensiveVarietyOfOptionsAvailableWhichCanBeSearchedWithGoogleFontsInTheRareEventThatMaterialSymbolsDoesNotHaveAnAdequateIconAvailableDesignersCanContributeNewIdeasForIconsBeforeContributingANewIconTakeLookAtOurExistingIconsWithinMaterialSymbolsAndConsiderTheFollowingQuestionsIsTheIconIMContributingVerySimilarToAnotherSystemIconCouldMyIconBeConfusedWithAnotherConceptThatExistsInAppsDoesThisDesignReallyRequireAnIconAtAllWouldATextLabelButtonOrOtherApproachProvideAClearerAffordanceForCustomerUnderstandingSpan
                }
              >
                as our default icon library. Material Symbols have an extensive
                variety of options available, which can be searched with
              </span>
              <span
                className={
                  styles.currentlyWeUseMaterialSymbolsAsOurDefaultIconLibraryMaterialSymbolsHaveAnExtensiveVarietyOfOptionsAvailableWhichCanBeSearchedWithGoogleFontsInTheRareEventThatMaterialSymbolsDoesNotHaveAnAdequateIconAvailableDesignersCanContributeNewIdeasForIconsBeforeContributingANewIconTakeLookAtOurExistingIconsWithinMaterialSymbolsAndConsiderTheFollowingQuestionsIsTheIconIMContributingVerySimilarToAnotherSystemIconCouldMyIconBeConfusedWithAnotherConceptThatExistsInAppsDoesThisDesignReallyRequireAnIconAtAllWouldATextLabelButtonOrOtherApproachProvideAClearerAffordanceForCustomerUnderstandingSpan3
                }
              >
                Google Fonts.
              </span>
              <span
                className={
                  styles.currentlyWeUseMaterialSymbolsAsOurDefaultIconLibraryMaterialSymbolsHaveAnExtensiveVarietyOfOptionsAvailableWhichCanBeSearchedWithGoogleFontsInTheRareEventThatMaterialSymbolsDoesNotHaveAnAdequateIconAvailableDesignersCanContributeNewIdeasForIconsBeforeContributingANewIconTakeLookAtOurExistingIconsWithinMaterialSymbolsAndConsiderTheFollowingQuestionsIsTheIconIMContributingVerySimilarToAnotherSystemIconCouldMyIconBeConfusedWithAnotherConceptThatExistsInAppsDoesThisDesignReallyRequireAnIconAtAllWouldATextLabelButtonOrOtherApproachProvideAClearerAffordanceForCustomerUnderstandingSpan
                }
              >
                <br />
                In the rare event that Material Symbols does not have an
                adequate icon available, designers can contribute new ideas for
                icons. Before contributing a new icon, take look at our existing
                icons within Material Symbols and consider the following
                questions:
                <br />
              </span>
              <ol
                className={
                  styles.currentlyWeUseMaterialSymbolsAsOurDefaultIconLibraryMaterialSymbolsHaveAnExtensiveVarietyOfOptionsAvailableWhichCanBeSearchedWithGoogleFontsInTheRareEventThatMaterialSymbolsDoesNotHaveAnAdequateIconAvailableDesignersCanContributeNewIdeasForIconsBeforeContributingANewIconTakeLookAtOurExistingIconsWithinMaterialSymbolsAndConsiderTheFollowingQuestionsIsTheIconIMContributingVerySimilarToAnotherSystemIconCouldMyIconBeConfusedWithAnotherConceptThatExistsInAppsDoesThisDesignReallyRequireAnIconAtAllWouldATextLabelButtonOrOtherApproachProvideAClearerAffordanceForCustomerUnderstandingSpan4
                }
              >
                <li>
                  Is the icon I’m contributing very similar to another system
                  icon?
                </li>
                <li>
                  Could my icon be confused with another concept that exists in
                  apps?
                </li>
                <li>
                  Does this design really require an icon at all? Would a text
                  label, button, or other approach provide a clearer affordance
                  for customer understanding?
                </li>
              </ol>
            </span>{" "}
          </div>
          <div
            className={
              styles.toContributeANewIconPleaseBringItToOurBiweeklyDesignSystemMeetingForReviewWithTheWholeTeamIfYouNeedTheCalendarInviteForwardingPleaseSendTheDesignTeamAMessageOnTeams
            }
          >
            <span>
              <span
                className={
                  styles.toContributeANewIconPleaseBringItToOurBiweeklyDesignSystemMeetingForReviewWithTheWholeTeamIfYouNeedTheCalendarInviteForwardingPleaseSendTheDesignTeamAMessageOnTeamsSpan
                }
              >
                To contribute a new icon, please bring it to our
              </span>
              <span
                className={
                  styles.toContributeANewIconPleaseBringItToOurBiweeklyDesignSystemMeetingForReviewWithTheWholeTeamIfYouNeedTheCalendarInviteForwardingPleaseSendTheDesignTeamAMessageOnTeamsSpan2
                }
              >
                Biweekly Design System meeting
              </span>
              <span
                className={
                  styles.toContributeANewIconPleaseBringItToOurBiweeklyDesignSystemMeetingForReviewWithTheWholeTeamIfYouNeedTheCalendarInviteForwardingPleaseSendTheDesignTeamAMessageOnTeamsSpan
                }
              >
                for review with the whole team. If you need the calendar invite
                forwarding, please send the
              </span>
              <span
                className={
                  styles.toContributeANewIconPleaseBringItToOurBiweeklyDesignSystemMeetingForReviewWithTheWholeTeamIfYouNeedTheCalendarInviteForwardingPleaseSendTheDesignTeamAMessageOnTeamsSpan2
                }
              >
                design team
              </span>
              <span
                className={
                  styles.toContributeANewIconPleaseBringItToOurBiweeklyDesignSystemMeetingForReviewWithTheWholeTeamIfYouNeedTheCalendarInviteForwardingPleaseSendTheDesignTeamAMessageOnTeamsSpan
                }
              >
                a message on Teams.
              </span>
            </span>{" "}
          </div>
        </div>
        <div className={styles.relatedLinks}>
          <div className={styles.frame7}>
            <div className={styles.relatedLinks2}>Related links </div>
          </div>
          <div className={styles.browseMaterialSymbolsOnGoogleFonts}>
            <ul className={styles.browseMaterialSymbolsOnGoogleFontsSpan}>
              <li>Browse Material Symbols on Google Fonts</li>
            </ul>{" "}
          </div>
        </div>
        <div className={styles.commonIcons}>
          <div className={styles.commonIconsGallery}>Common icons gallery </div>
          <img className={styles.picture14} src="picture-1-40.png" />
        </div>
        <div className={styles.footer}>
          <div className={styles.line1}></div>
          <div className={styles.two026NpxDesignSystem}>
            Ⓒ 2026 NPX Design System{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
