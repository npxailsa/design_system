import React from 'react';
import { DocsTemplate } from '../DocsTemplate/DocsTemplate';
import Icon from './Icon';

/* MUI Icons used in Do/Don't examples and gallery */
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

/* Gallery icons */
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FilterListIcon from '@mui/icons-material/FilterList';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

export const IconDocs: React.FC = () => {
  return (
    <DocsTemplate>
      <DocsTemplate.Header
        title="Iconography"
        subtitle="Icons are visual representations of commands, features, directories, or common actions"
      />

      <DocsTemplate.BodyText>
        Icons are symbols designed to represent concepts or specific features. A
        company&rsquo;s iconography style can express a lot about a brand and its
        values.
        <br />
        Our iconography has rounded corners and curves to align with our typography
        and other rounded UI elements, whilst square end terminals add boldness to
        create a harmonious app expression of NPX&rsquo;s broader design language.
      </DocsTemplate.BodyText>

      <DocsTemplate.TokenTable
        title="Design Tokens"
        description="We use the following tokens to render our icons:"
        tokens={[
          { name: '--brand-icon-main', description: 'Primary icon color' },
          { name: '--icon-size-2x-small', description: '2x-small icon size' },
          { name: '--icon-size-x-small', description: 'x-small icon size' },
          { name: '--icon-size-small', description: 'small icon size' },
          { name: '--icon-size-default', description: 'default icon size' },
          { name: '--icon-size-large', description: 'large icon size' },
        ]}
      />

      <DocsTemplate.Section
        title="Iconography principles"
        subtitle="Follow these common design principles by using icons in a cohesive, useful, and legible way."
      />

      <DocsTemplate.Principles>
        <DocsTemplate.PrincipleCard number={1} title="Design for universal understanding">
          Design icons that use widely recognized symbols and established visual
          metaphors. Ensure icons are easily understood by a diverse audience by
          avoiding specific cultural or language aspects.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={2} title="Balance simplicity and detail to create legibility">
          Craft icons that are simple enough for quick recognition, yet detailed
          enough to convey meaning effectively, even at small sizes.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={3} title="Maintain visual harmony">
          Ensure icons work together as a cohesive system by adhering to consistent
          size, shape, and style guidelines across the entire set.
        </DocsTemplate.PrincipleCard>

        <DocsTemplate.PrincipleCard number={4} title="Use icons intentionally">
          Icons are powerful signifiers that can aid comprehension and help with
          navigation. They can also add clutter or confuse people when used poorly.
          Use text labels to support icons wherever possible, and avoid using icons
          where they aren&rsquo;t necessary.
        </DocsTemplate.PrincipleCard>
      </DocsTemplate.Principles>

      <DocsTemplate.Section
        title="Using icons"
        subtitle="To use an icon, import the Icon component and a specific icon from @mui/icons-material"
      />

      <DocsTemplate.CodeBlock>
        {`import { Icon } from './components/Icon';
import HomeIcon from '@mui/icons-material/Home';

const MyComponent = () => (
  <Icon icon={HomeIcon} color="primary" size="default" />
);`}
      </DocsTemplate.CodeBlock>

      <DocsTemplate.BodyText>
        You can find all available icons in the{' '}
        <a
          href="https://mui.com/material-ui/material-icons/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--color-primary-blue-blue)', textDecoration: 'underline' }}
        >
          Material UI Icon Search
        </a>
        . Simply find the name of the icon and import it from{' '}
        <code style={{ fontFamily: 'monospace', fontWeight: 600 }}>@mui/icons-material</code>
        <br />
        For example:
      </DocsTemplate.BodyText>

      <DocsTemplate.CodeBlock>
        {`Home -> import HomeIcon from '@mui/icons-material/Home'
Favorite -> import FavoriteIcon from '@mui/icons-material/Favorite'
Settings -> import SettingsIcon from '@mui/icons-material/Settings'`}
      </DocsTemplate.CodeBlock>

      <DocsTemplate.BodyText>
        Our icons are available as a component (React, via MUI Icons), within Figma,
        and in our documentation.
      </DocsTemplate.BodyText>

      <DocsTemplate.BulletList
        variant="link"
        items={[
          'View MUI Symbols icons',
          'MUI Material GitHub component usage',
          'MUI Symbols Figma Plugin',
          'NPX Design System Curated Icons (Figma library)',
        ]}
      />

      <DocsTemplate.Section
        title="Visual style"
        subtitle='Our icons are available as "filled" or "outline" options, dependant on the scenario you may need them for. Where accessibility contrast is low, using "filled" icons will create a better visual distinction for those who may be colourblind or partially sighted.'
      />

      <DocsTemplate.Subsection title="Simplicity &amp; metaphor" />

      <DocsTemplate.BodyText>
        Wherever possible, use icons from the Curated Icons Figma file to maintain
        consistency and reinforce visual concepts across experiences, so they become
        familiar to users.
      </DocsTemplate.BodyText>

      <DocsTemplate.DosDonts
        doItem={{
          icon: <Icon icon={NotificationsOutlinedIcon} size="x-large" />,
          description:
            'Use an existing icon or visual metaphor for consistency and clarity wherever possible.',
        }}
        dontItem={{
          icon: <Icon icon={NotificationsActiveIcon} size="x-large" />,
          description:
            'Create a new icon if a suitable one already exists to represent the same metaphor.',
        }}
      />

      <DocsTemplate.BodyText>
        Use simplified shapes with the minimum detail required to express a metaphor.
        The goal of an icon is to aid clear, quick comprehension &mdash; excess detail
        can distract and do the opposite. The small size of icons makes it harder to
        see fine details, so we optimise for simplicity and legibility.
      </DocsTemplate.BodyText>

      <DocsTemplate.DosDonts
        doItem={{
          icon: <Icon icon={LocalOfferOutlinedIcon} size="x-large" />,
          description:
            'Use simple shapes with the minimum detail required to express a metaphor with clarity and legibility.',
        }}
        dontItem={{
          icon: <Icon icon={LoyaltyIcon} size="x-large" />,
          description:
            "Don\u2019t add excess detail unless necessary. This can distract and be challenging to read at small sizes.",
        }}
      />

      <DocsTemplate.BodyText>
        When creating a new icon, use symbols that clearly represent a concept. Try to
        use metaphors with clear and established associations wherever possible.
      </DocsTemplate.BodyText>

      <DocsTemplate.DosDonts
        doItem={{
          icon: <Icon icon={SettingsOutlinedIcon} size="x-large" />,
          label: "Settings",
          description:
            'Use familiar symbols with clear and established associations that clearly represent a concept.',
        }}
        dontItem={{
          icon: <Icon icon={BuildOutlinedIcon} size="x-large" />,
          label: "Settings",
          description:
            "Use caution when creating an icon that isn\u2019t a widely recognized symbol. It may be confused with another concept or misunderstood.",
        }}
      />

      <DocsTemplate.Subsection title="Perspective &amp; angles" />

      <DocsTemplate.BodyText>
        Shapes should appear straight on or from a full 90 degree profile. Don&rsquo;t
        use diagonal perspectives to create 3D shapes because these can be hard to
        discern at a glance, especially for people with some cognitive disabilities.
      </DocsTemplate.BodyText>

      <DocsTemplate.DosDonts
        doItem={{
          icon: <Icon icon={ArchiveOutlinedIcon} size="x-large" />,
          description:
            'Try to use shapes that appear straight on without dimensionality.',
        }}
        dontItem={{
          icon: <Icon icon={ViewInArOutlinedIcon} size="x-large" />,
          description:
            "Don\u2019t use diagonal perspectives to create 3D shapes as they can be hard to discern at a glance.",
        }}
      />

      <DocsTemplate.Section
        title="Size &amp; spacing"
        subtitle="System icons are available at multiple sizes, depending of their usage:"
      />

      <DocsTemplate.SizeDemo
        rows={[
          {
            label: 'Default (16px)',
            sublabel: 'use in most cases',
            children: <Icon icon={HomeOutlinedIcon} size="default" />,
          },
          {
            label: 'Small (14px)',
            sublabel: 'Use sparingly',
            children: <Icon icon={HomeOutlinedIcon} size="small" />,
          },
          {
            label: 'X-Small (12px)',
            sublabel: 'Use rarely',
            children: <Icon icon={HomeOutlinedIcon} size="x-small" />,
          },
          {
            label: '2X-Small (10px)',
            sublabel: 'Use rarely',
            children: <Icon icon={HomeOutlinedIcon} size="2x-small" />,
          },
          {
            label: 'Large (18px)',
            sublabel: 'Use sparingly',
            children: <Icon icon={HomeOutlinedIcon} size="large" />,
          },
        ]}
      />

      <DocsTemplate.BodyText>
        By default, there is always at least 2px of padding around an icon, and in
        cases where the icon is not square itself, we default to the longest side and
        centre the icon on its shortest side. All padding values should be applied
        using the design tokens within the design system.
      </DocsTemplate.BodyText>

      <DocsTemplate.Section title="Shapes">
        <DocsTemplate.BodyText>
          Icons use consistent shapes to ensure a consistent look and feel across the
          set. MUI designed each shape for optical scale and balance, so that taller,
          thinner shapes don&rsquo;t feel like a different scale from shorter or wider
          shapes.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>

      <DocsTemplate.Subsection title="Corner &amp; curves" />

      <DocsTemplate.BodyText>
        Curved edges lend to a friendlier feel, but internal edges remain sharp to
        maintain clarity.
      </DocsTemplate.BodyText>

      <DocsTemplate.DosDonts
        doItem={{
          icon: <Icon icon={StarOutlineIcon} size="x-large" />,
          description: 'Where possible, keep internal angles sharp.',
        }}
        dontItem={{
          icon: <Icon icon={StarIcon} size="x-large" />,
          description:
            'Use a rounded icon, when an outlined or sharp option is available.',
        }}
      />

      <DocsTemplate.Section title="Colour">
        <DocsTemplate.BodyText>
          Like most elements in our system, icons use design tokens for their colours.
          Never use inaccessible colours for icons, especially if there is no label to
          help the user further parse its meaning. There should be no use of hardcoded
          colours with icons &ndash; pick from the design system tokens available.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>

      <DocsTemplate.Section title="Contribution &amp; adding new icons">
        <DocsTemplate.BodyText>
          Currently, we use{' '}
          <a
            href="https://fonts.google.com/icons?icon.set=Material+Symbols"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-primary-blue-blue)', textDecoration: 'underline' }}
          >
            Material Symbols
          </a>{' '}
          as our default icon library. Material Symbols have an extensive variety of
          options available, which can be searched with{' '}
          <a
            href="https://fonts.google.com/icons?icon.set=Material+Symbols"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--color-primary-blue-blue)', textDecoration: 'underline' }}
          >
            Google Fonts
          </a>
          .
          <br />
          In the rare event that Material Symbols does not have an adequate icon
          available, designers can contribute new ideas for icons. Before contributing
          a new icon, take look at our existing icons within Material Symbols and
          consider the following questions:
        </DocsTemplate.BodyText>

        <DocsTemplate.BulletList
          ordered
          items={[
            "Is the icon I\u2019m contributing very similar to another system icon?",
            'Could my icon be confused with another concept that exists in apps?',
            'Does this design really require an icon at all? Would a text label, button, or other approach provide a clearer affordance for customer understanding?',
          ]}
        />

        <DocsTemplate.BodyText>
          To contribute a new icon, please bring it to our{' '}
          <strong>Biweekly Design System meeting</strong> for review with the whole
          team. If you need the calendar invite forwarding, please send the{' '}
          <strong>design team</strong> a message on Teams.
        </DocsTemplate.BodyText>
      </DocsTemplate.Section>

      <DocsTemplate.Section title="Common icons gallery" />

      <DocsTemplate.IconGallery
        items={[
          { icon: <Icon icon={HomeOutlinedIcon} size="x-large" />, label: 'Home' },
          { icon: <Icon icon={SearchIcon} size="x-large" />, label: 'Search' },
          { icon: <Icon icon={PersonOutlineIcon} size="x-large" />, label: 'Person' },
          { icon: <Icon icon={SettingsOutlinedIcon} size="x-large" />, label: 'Settings' },
          { icon: <Icon icon={FavoriteBorderIcon} size="x-large" />, label: 'Favorite' },
          { icon: <Icon icon={NotificationsOutlinedIcon} size="x-large" />, label: 'Notifications' },
          { icon: <Icon icon={DeleteOutlineIcon} size="x-large" />, label: 'Delete' },
          { icon: <Icon icon={EditOutlinedIcon} size="x-large" />, label: 'Edit' },
          { icon: <Icon icon={MailOutlineIcon} size="x-large" />, label: 'Mail' },
          { icon: <Icon icon={LockOutlinedIcon} size="x-large" />, label: 'Lock' },
          { icon: <Icon icon={VisibilityOutlinedIcon} size="x-large" />, label: 'Visibility' },
          { icon: <Icon icon={CheckCircleOutlineIcon} size="x-large" />, label: 'Check' },
          { icon: <Icon icon={InfoOutlinedIcon} size="x-large" />, label: 'Info' },
          { icon: <Icon icon={WarningAmberIcon} size="x-large" />, label: 'Warning' },
          { icon: <Icon icon={ContentCopyOutlinedIcon} size="x-large" />, label: 'Copy' },
          { icon: <Icon icon={FileDownloadOutlinedIcon} size="x-large" />, label: 'Download' },
          { icon: <Icon icon={ShareOutlinedIcon} size="x-large" />, label: 'Share' },
          { icon: <Icon icon={FilterListIcon} size="x-large" />, label: 'Filter' },
          { icon: <Icon icon={CalendarTodayOutlinedIcon} size="x-large" />, label: 'Calendar' },
          { icon: <Icon icon={AccessTimeIcon} size="x-large" />, label: 'Time' },
          { icon: <Icon icon={AddCircleOutlineIcon} size="x-large" />, label: 'Add' },
          { icon: <Icon icon={CloseIcon} size="x-large" />, label: 'Close' },
          { icon: <Icon icon={ArchiveOutlinedIcon} size="x-large" />, label: 'Archive' },
          { icon: <Icon icon={StarOutlineIcon} size="x-large" />, label: 'Star' },
        ]}
      />

      <DocsTemplate.RelatedLinks
        links={[
          {
            label: 'Browse Material Symbols on Google Fonts',
            href: 'https://fonts.google.com/icons?icon.set=Material+Symbols',
          },
        ]}
      />

      <DocsTemplate.Footer />
    </DocsTemplate>
  );
};
